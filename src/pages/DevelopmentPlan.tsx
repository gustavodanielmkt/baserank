import { ArrowLeft, MoreVertical, Timer, Dumbbell, PlayCircle, Star } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router-dom';

export function DevelopmentPlan() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/">
              <ArrowLeft className="text-primary w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold tracking-tight">Plano de Desenvolvimento</h1>
          </div>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-8">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Curto Prazo (30 Dias)</h2>
            <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded-full uppercase">
              Ativo
            </span>
          </div>
          <div className="bg-white dark:bg-emerald-950/20 border border-primary/10 rounded-xl overflow-hidden shadow-sm">
            <div
              className="relative h-48 w-full bg-slate-200 dark:bg-slate-800"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkd749x-PZf-KBI4qNfK6D9wtuqbtd4OE0DbvjaosHx8M3_OEqXZ7-drj_sw6X8D0hZbyEKrKTPbpya69OblhGFlzhpAmn10ywGgkWg_fp8kkR-TMNFzacocs5LyNu3us6ljt24bRDq1cwKld0F08R1wPPWszuIZyx2khQ2gpuM-j38VA9IeOCEi-1GcgbuL4MN1aVIbOB3jiOPrdzKtfBPSgEOC3WPojNAVe6WYkW_gFcZQfKpGJmdq-3UOv9JbvVBvPIJo8AX8kX")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-bold">Melhorar finalização com a perna ruim</h3>
                <p className="text-emerald-200 text-sm">Foco em 15 minutos de treino diário</p>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Progresso Geral</span>
                  <span className="text-primary">63%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-emerald-900/40 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '63%' }}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-emerald-500/60 italic">19 de 30 dias completados</p>
              </div>
              <button className="w-full py-3 bg-primary text-background-dark font-bold rounded-lg hover:opacity-90 transition-opacity">
                Ver Treinos Diários
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary">Médio Prazo (90 Dias)</h2>
          <div className="bg-white dark:bg-emerald-950/20 border border-primary/10 rounded-xl p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Timer className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Aumentar velocidade de arranque em 2%</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-1.5 flex-1 bg-slate-200 dark:bg-emerald-900/40 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '25%' }}></div>
                </div>
                <span className="text-xs font-medium">25%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary">Visão a Longo Prazo</h2>
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter italic">Contrato Profissional</h3>
              <p className="text-emerald-100 text-sm mt-1">Data Alvo: Verão 2026</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                <Star className="w-4 h-4 fill-current" />
                4 Objetivos Principais Restantes
              </div>
            </div>
            <Star className="absolute -right-4 -bottom-4 text-white/10 w-48 h-48 fill-current" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary">Feedback do Treinador</h2>
          <div className="bg-white dark:bg-emerald-950/20 border-l-4 border-primary rounded-r-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full bg-slate-300 overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQAd696oq78Znbo-E9Wo8k9prh67MlbBB-7ukSuJiBGe6kDWZTNfuTsHUd2oHKj-eJGYnwtkHIqD-Vp657j1yywUQgOiZZPCfBwmTL2tNRqVLV1S6-VhcFBPWKO_XRKdMUGViEAedlc4TA-FIMWFhyopF6ue5WDVYYk4MfU9_j1U1I1u4iJjDNe3g8Ttu5Fja1rQuPdvFMTvEaikxqxwq--SRArihOpDlHXXCa20tCjtFmaoxLeKI5womdX35jJhXly5X4AP1a4q1g")',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div>
                <p className="text-sm font-bold">Treinador Marcus Thompson</p>
                <p className="text-xs text-slate-500 dark:text-emerald-500/60">Treinador Principal da Base • há 2h</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 italic">
              "Ótima intensidade na sessão de hoje. Seu posicionamento nos treinos com a perna ruim melhorou significativamente. Mantenha o equilíbrio centralizado na hora de chutar."
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary">Treinos Recomendados</h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="group flex items-center justify-between p-4 bg-white dark:bg-emerald-950/20 border border-primary/5 rounded-xl hover:border-primary/30 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Circuito Pliométrico</p>
                  <p className="text-xs text-slate-500 dark:text-emerald-500/60 italic">Força e Explosão • 45m</p>
                </div>
              </div>
              <PlayCircle className="text-slate-400 w-6 h-6" />
            </div>
            <div className="group flex items-center justify-between p-4 bg-white dark:bg-emerald-950/20 border border-primary/5 rounded-xl hover:border-primary/30 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <Timer className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Intervalado de Alta Intensidade</p>
                  <p className="text-xs text-slate-500 dark:text-emerald-500/60 italic">Condicionamento Físico • 30m</p>
                </div>
              </div>
              <PlayCircle className="text-slate-400 w-6 h-6" />
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
