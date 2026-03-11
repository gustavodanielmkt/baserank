/**
 * Script de Importação de Atletas Amadores da FPF
 * Federação Paulista de Futebol - futebolpaulista.com.br
 *
 * Este script usa Puppeteer para contornar a proteção Cloudflare,
 * navega até a aba "Amador" e coleta os dados dos atletas letra por letra.
 *
 * Uso: npx tsx src/scripts/import-fpf.ts
 */

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Carregar variáveis de ambiente
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

puppeteer.use(StealthPlugin());

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const DELAY_ENTRE_LETRAS = 3000; // 3 segundos entre cada letra
const DELAY_ENTRE_PAGINAS = 2000; // 2 segundos entre cada página
const URL_BASE = 'https://www.futebolpaulista.com.br/Atletas/#Amador';

interface AtletaFPF {
    nome: string;
    clube: string;
    foto_url: string;
    categoria: string;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log('🏟️  BaseRank - Importador de Atletas FPF');
    console.log('=========================================');
    console.log(`📅 Início: ${new Date().toLocaleString('pt-BR')}`);
    console.log(`🔗 Supabase URL: ${supabaseUrl ? '✅ Configurado' : '❌ Faltando!'}`);
    console.log('');

    if (!supabaseUrl || !supabaseKey) {
        console.error('❌ Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env.local');
        process.exit(1);
    }

    console.log('🚀 Abrindo navegador...');
    const browser = await puppeteer.launch({
        headless: false, // false = abre o navegador para você ver (mude para true para modo invisível)
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--window-size=1366,768'
        ],
        defaultViewport: { width: 1366, height: 768 }
    });

    const page = await browser.newPage();

    // Simular um navegador real
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    try {
        // 1. Acessar a página de Atletas
        console.log('🌐 Acessando site da FPF...');
        await page.goto(URL_BASE, { waitUntil: 'networkidle2', timeout: 60000 });
        await sleep(5000); // Esperar possível desafio Cloudflare

        // 2. Aceitar cookies se aparecer
        try {
            const btnCookies = await page.$('button:has-text("ACEITAR"), .aceitar-cookies, [data-action="accept"]');
            if (btnCookies) {
                await btnCookies.click();
                console.log('🍪 Cookies aceitos.');
                await sleep(1000);
            }
        } catch { /* sem banner de cookies */ }

        // 3. Clicar na aba "AMADOR"
        console.log('📋 Clicando na aba "AMADOR"...');
        await page.evaluate(() => {
            const tabs = document.querySelectorAll('a, li, span, div');
            for (const el of tabs) {
                if (el.textContent?.trim().toUpperCase() === 'AMADOR') {
                    (el as HTMLElement).click();
                    break;
                }
            }
        });
        await sleep(3000);

        let totalImportados = 0;
        let totalErros = 0;

        // 4. Percorrer cada letra do alfabeto
        for (const letra of LETRAS) {
            console.log(`\n🔤 Processando letra "${letra}"...`);

            try {
                // Clicar na letra correspondente no filtro alfabético
                await page.evaluate((l: string) => {
                    const links = document.querySelectorAll('a, span, li, div');
                    for (const el of links) {
                        if (el.textContent?.trim() === l && el.closest('.alfabeto, .letters, .filtro-letras, .paginacao-letras, [class*="letra"], [class*="alpha"]')) {
                            (el as HTMLElement).click();
                            return;
                        }
                    }
                    // Fallback: tentar clicar em qualquer elemento que só contenha a letra
                    for (const el of links) {
                        if (el.textContent?.trim() === l && el.getAttribute('href')?.includes('#') || el.getAttribute('data-letra') === l) {
                            (el as HTMLElement).click();
                            return;
                        }
                    }
                }, letra);

                await sleep(DELAY_ENTRE_LETRAS);

                // Extrair atletas visíveis na página
                const atletas = await page.evaluate(() => {
                    const items: AtletaFPF[] = [];

                    // Tentar diferentes seletores para encontrar os cards de atletas
                    const cards = document.querySelectorAll(
                        '.atleta, .card-atleta, .item-atleta, [class*="atleta"], .listagem-atletas li, .lista-atletas .item, .result-atletas .item'
                    );

                    for (const card of cards) {
                        const nome = card.querySelector('h3, h4, .nome, .nome-atleta, [class*="nome"], strong, b')?.textContent?.trim() || '';
                        const clube = card.querySelector('.clube, .nome-clube, [class*="clube"], small, .info, .subtitle')?.textContent?.trim() || '';
                        const fotoEl = card.querySelector('img');
                        const foto_url = fotoEl?.src || fotoEl?.getAttribute('data-src') || '';

                        if (nome) {
                            items.push({ nome, clube, foto_url, categoria: 'Amador' });
                        }
                    }

                    // Fallback: se não encontrou cards, tentar pegar dados da tabela/lista simples
                    if (items.length === 0) {
                        const rows = document.querySelectorAll('table tbody tr, .resultado .linha, .grid-atletas > div');
                        for (const row of rows) {
                            const cells = row.querySelectorAll('td, span, div');
                            const nome = cells[0]?.textContent?.trim() || row.querySelector('a')?.textContent?.trim() || '';
                            const clube = cells[1]?.textContent?.trim() || '';
                            if (nome && nome.length > 2) {
                                items.push({ nome, clube, foto_url: '', categoria: 'Amador' });
                            }
                        }
                    }

                    return items;
                });

                console.log(`   📊 Encontrados: ${atletas.length} atletas`);

                // Salvar no Supabase
                if (atletas.length > 0) {
                    // Processar em lotes de 50
                    for (let i = 0; i < atletas.length; i += 50) {
                        const lote = atletas.slice(i, i + 50);

                        const registros = lote.map((a) => ({
                            full_name: a.nome,
                            club: a.clube || 'Não informado',
                            nationality: 'Brasileiro',
                            position: 'Não definida',
                            preferred_foot: '',
                            height: null,
                            weight: null,
                            birth_date: null,
                            fpf_categoria: a.categoria,
                            fpf_foto_url: a.foto_url,
                            fonte: 'FPF-Import'
                        }));

                        const { error } = await supabase
                            .from('athlete_profiles_fpf')
                            .upsert(registros, { onConflict: 'full_name,club' });

                        if (error) {
                            console.error(`   ❌ Erro ao salvar lote: ${error.message}`);
                            totalErros += lote.length;
                        } else {
                            totalImportados += lote.length;
                            console.log(`   ✅ Salvos: ${lote.length} atletas (total: ${totalImportados})`);
                        }
                    }
                }

            } catch (err: any) {
                console.error(`   ❌ Erro na letra "${letra}": ${err.message}`);
                totalErros++;
            }

            await sleep(DELAY_ENTRE_PAGINAS);
        }

        console.log('\n=========================================');
        console.log('📊 RELATÓRIO FINAL');
        console.log(`   ✅ Importados com sucesso: ${totalImportados}`);
        console.log(`   ❌ Erros: ${totalErros}`);
        console.log(`   📅 Término: ${new Date().toLocaleString('pt-BR')}`);
        console.log('=========================================\n');

    } catch (err: any) {
        console.error('❌ Erro fatal:', err.message);
    } finally {
        await browser.close();
        console.log('🔒 Navegador fechado.');
    }
}

main().catch(console.error);
