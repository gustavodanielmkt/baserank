import { ArrowLeft, Share2, Dumbbell, Timer, Zap, ShieldAlert, TrendingUp, TrendingDown, CheckCircle } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', value: 30 },
  { name: 'FEV', value: 31.5 },
  { name: 'MAR', value: 32 },
  { name: 'ABR', value: 31 },
  { name: 'MAI', value: 33.5 },
  { name: 'JUN', value: 34.8 },
];

export function PerformanceAnalytics() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-200 dark:border-emerald-900/30">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <Link to="/">
            <ArrowLeft className="text-slate-900 dark:text-slate-100 cursor-pointer w-6 h-6" />
          </Link>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Análise de Desempenho
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-slate-900 dark:text-slate-100">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-background-light dark:bg-background-dark sticky top-[64px] z-10">
        <div className="flex border-b border-slate-200 dark:border-emerald-900/30 px-4 gap-8">
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-emerald-500/60 pb-3 pt-4"
            href="#"
          >
            <p className="text-sm font-bold">Visão Geral</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-primary text-slate-900 dark:text-slate-100 pb-3 pt-4"
            href="#"
          >
            <p className="text-sm font-bold">Métricas</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-emerald-500/60 pb-3 pt-4"
            href="#"
          >
            <p className="text-sm font-bold">Histórico</p>
          </a>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30">
            <div className="flex items-center gap-2">
              <Dumbbell className="text-primary w-4 h-4" />
              <p className="text-slate-500 dark:text-emerald-400/80 text-xs font-medium uppercase tracking-wider">
                Força
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">88/100</p>
            <p className="text-primary text-xs font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +5%
            </p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30">
            <div className="flex items-center gap-2">
              <Timer className="text-primary w-4 h-4" />
              <p className="text-slate-500 dark:text-emerald-400/80 text-xs font-medium uppercase tracking-wider">
                Reação
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">0.24s</p>
            <p className="text-red-500 text-xs font-bold flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              -2%
            </p>
          </div>
          <div className="flex min-w-[100px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30">
            <div className="flex items-center gap-2">
              <Zap className="text-primary w-4 h-4" />
              <p className="text-slate-500 dark:text-emerald-400/80 text-xs font-medium uppercase tracking-wider">
                Resistência
              </p>
            </div>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">Alta</p>
            <p className="text-primary text-xs font-bold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Estável
            </p>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-emerald-900/10 border border-slate-200 dark:border-emerald-800/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-emerald-400/60 uppercase">
                  Indicador de Risco de Lesão
                </p>
                <p className="text-lg font-bold text-primary">Baixo Risco</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-2 w-8 rounded-full bg-primary"></div>
              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-emerald-900/40"></div>
              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-emerald-900/40"></div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30 rounded-xl p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Velocidade de Arranque (km/h)</h3>
              <div className="px-2 py-1 rounded bg-slate-100 dark:bg-emerald-900/40 text-[10px] font-bold text-slate-500 dark:text-emerald-400 uppercase tracking-tighter">
                Últimos 6 Meses
              </div>
            </div>
            <div className="relative h-40 flex flex-col justify-end">
              <div className="absolute inset-0 pb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#21c45d"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#21c45d', strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: '#21c45d', stroke: 'white', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between w-full z-10">
                {data.map((item) => (
                  <div key={item.name} className="text-[10px] text-slate-400 dark:text-emerald-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 border-t border-slate-100 dark:border-emerald-800/30 pt-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-emerald-400/60">Pico Atual</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">34.8 km/h</p>
              </div>
              <div className="h-8 w-px bg-slate-100 dark:bg-emerald-800/30"></div>
              <div>
                <p className="text-xs text-slate-500 dark:text-emerald-400/60">Média CA 17 anos</p>
                <p className="text-xl font-bold text-slate-400 dark:text-emerald-700">31.2 km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30 rounded-xl p-5">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-4">Salto Vertical (cm)</h3>
            <div className="flex items-end justify-between gap-4 h-32">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary/20 rounded-t-lg h-[40%]"></div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Parado</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary rounded-t-lg h-[85%] relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">68cm</div>
                </div>
                <span className="text-[10px] text-slate-900 dark:text-slate-100 font-bold uppercase">Em Movimento</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary/20 rounded-t-lg h-[60%]"></div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Aproximação</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-3">Desempenho Comparado</h3>
          <div className="bg-white dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800/30 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 p-3 bg-slate-50 dark:bg-emerald-900/40 border-b border-slate-100 dark:border-emerald-800/30">
              <div className="text-[10px] font-bold text-slate-500 dark:text-emerald-400 uppercase">Métrica</div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-emerald-400 uppercase text-center">Você</div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-emerald-400 uppercase text-right">
                Média (CA Sub-17)
              </div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-emerald-800/30">
              <div className="grid grid-cols-3 p-4 items-center">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Teste-T de Agilidade</div>
                <div className="text-sm font-bold text-primary text-center">8.42s</div>
                <div className="text-sm font-medium text-slate-400 dark:text-emerald-700 text-right">9.10s</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">VO2 Max</div>
                <div className="text-sm font-bold text-primary text-center">58.5</div>
                <div className="text-sm font-medium text-slate-400 dark:text-emerald-700 text-right">54.2</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Índice de Fadiga</div>
                <div className="text-sm font-bold text-red-400 text-center">12%</div>
                <div className="text-sm font-medium text-slate-400 dark:text-emerald-700 text-right">8.5%</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
