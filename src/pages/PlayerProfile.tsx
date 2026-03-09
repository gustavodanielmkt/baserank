import { ArrowLeft, Share2, Bookmark, Activity, TrendingUp, TrendingDown, Dribbble } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router-dom';

export function PlayerProfile() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen pb-20">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/">
              <ArrowLeft className="text-slate-900 dark:text-slate-100 cursor-pointer w-6 h-6" />
            </Link>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
              Perfil do Jogador
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <Share2 className="text-slate-900 dark:text-slate-100 w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <Bookmark className="text-slate-900 dark:text-slate-100 w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-4 space-y-6">
        <section className="flex flex-col md:flex-row gap-6 items-start @container">
          <div className="relative w-full md:w-48 aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-primary/20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEVD2onFJasbhaAwkrrkxtvz1usyjtWfQn-b4_auANESWMKuJz4myyY29Ae8EWYBq4C0cmiSB1O-veNefcgQegz-LPZ18qYWlccCCpbvusyAyWXE57-qDBGe4quT6GGaqP48jxtRmeYJCJzbxmV5yR3BYCmZ_nKvjFjVgikWmA68HM9PMvfUad8RiGsk7o0a5i86hBnVkc1AlyJS3Vrg46caOcJAd40Y6avrQ8lt3TYI7vran_QPAwDvce66Yd5UlOMCd-OvHmXCfN")',
              }}
            ></div>
            <div className="absolute bottom-2 right-2 bg-primary text-background-dark text-xs font-bold px-2 py-1 rounded">
              CA
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Rasmus Højlund
                </h1>
                <p className="text-primary font-medium">Academy FC • #9 • Centroavante</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 md:flex-none px-6 py-2 bg-primary text-background-dark font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Seguir
                </button>
                <button className="flex-1 md:flex-none px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                  Comparar
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Gols</p>
                <p className="text-2xl font-bold text-primary">12</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Assistências</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  Jogos
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  Valor de Mercado
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">€65.0M</p>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="text-primary w-5 h-5" />
                Estatísticas Vitais
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Altura</p>
                  <p className="font-semibold">185 cm</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Peso</p>
                  <p className="font-semibold">78 kg</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Pé Dominante</p>
                  <p className="font-semibold">Direito</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Nacionalidade</p>
                  <p className="font-semibold flex items-center gap-1">🇩🇰 Dinamarquês</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Idade</p>
                  <p className="font-semibold">21 (4 Fev, 2003)</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Contrato Até</p>
                  <p className="font-semibold">30 Jun, 2026</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary w-5 h-5" />
                  Pontos Fortes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Finalização</span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">
                      Muito Forte
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Cabeceio</span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">Forte</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Posicionamento</span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-bold">Forte</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="text-red-500 w-5 h-5" />
                  Pontos Fracos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Contribuição Defensiva</span>
                    <span className="bg-red-500/20 text-red-500 px-2 py-0.5 rounded text-xs font-bold">Fraco</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Controle de Bola</span>
                    <span className="bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded text-xs font-bold">
                      Médio
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <aside className="space-y-6">
            <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Índice de Rendimento</h3>
              <div className="flex flex-col items-center py-4">
                <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 border-primary/20 border-t-primary">
                  <span className="text-3xl font-black">84</span>
                </div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium">Top 5% da Liga</p>
              </div>
              <div className="space-y-4 mt-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>RITMO</span>
                    <span>89</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>FINALIZAÇÃO</span>
                    <span>85</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>PASSE</span>
                    <span>72</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Última Partida</h3>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <Dribbble className="text-slate-500 w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Academy FC 3 - 1 City Rivals</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Jogou 90' • 1 Gol • 1 Assistência</p>
                </div>
                <div className="text-primary font-bold">8.2</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
