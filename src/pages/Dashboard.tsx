import { Bell, Menu, PlusCircle, PlayCircle, Zap, ArrowUp, Activity, Heart } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

export function Dashboard() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-20">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-primary/10">
        <div className="text-primary flex size-12 shrink-0 items-center justify-start">
          <Menu className="w-8 h-8" />
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center">
          Painel BaseRank
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex p-6">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20 p-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-CQA-LuyTz2B8FtAUsZ_M6vFI2FYs1eKEMaIxpNJR30G-ex-svil-O6XBWNW7QWxTId9iSCg9MiQ-LgN6U2fRW7f98L8ih_ky__R7F8UiFmcSymRBHEZy-mdnmuVoFmj2q2xIz_GEru4bMTmoQEaT8Rbmdwo_yFOfpF5idXfB_7OQCMtbGSHxHg5xb8wZn3PFD5XJpDznHiU1YCEur8nex30BIUsASrO7vsPcMMqyjhMDusNqOe2HkbuOUH4vOO8Ff_ZhrNzQCvid")',
                }}
              ></div>
              <div className="absolute bottom-1 right-1 bg-primary text-background-dark rounded-full p-1 border-2 border-background-dark">
                <div className="w-4 h-4 rounded-full bg-background-dark flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Marcus Jensen</h2>
              <p className="text-primary font-semibold text-sm">Academy FC • Centroavante (CA)</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">17 anos • Dinamarca</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-2">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Atributos Físicos</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-primary/5 border border-primary/10">
            <div className="flex justify-between items-center">
              <Activity className="text-primary w-5 h-5" />
              <span className="text-primary text-xs font-bold">+1.2%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Velocidade Máx.</p>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              34.2 <span className="text-xs font-normal opacity-70">km/h</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-primary/5 border border-primary/10">
            <div className="flex justify-between items-center">
              <ArrowUp className="text-red-500 w-5 h-5" />
              <span className="text-red-500 text-xs font-bold">-0.5s</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Salto Vertical</p>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              68 <span className="text-xs font-normal opacity-70">cm</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-primary/5 border border-primary/10">
            <div className="flex justify-between items-center">
              <Zap className="text-primary w-5 h-5" />
              <span className="text-primary text-xs font-bold">+0.02s</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Reação</p>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              0.22 <span className="text-xs font-normal opacity-70">seg</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-4 bg-primary/5 border border-primary/10">
            <div className="flex justify-between items-center">
              <Heart className="text-primary w-5 h-5" />
              <span className="text-primary text-xs font-bold">+5%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Vigor</p>
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              92 <span className="text-xs font-normal opacity-70">/100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 mt-4">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Radar de Desempenho</h3>
        <div className="aspect-square w-full max-w-sm mx-auto bg-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-primary/10">
          <svg className="w-full h-full p-8 opacity-40" viewBox="0 0 200 200">
            <circle className="text-primary" cx="100" cy="100" fill="none" r="80" stroke="currentColor" strokeWidth="0.5"></circle>
            <circle className="text-primary" cx="100" cy="100" fill="none" r="60" stroke="currentColor" strokeWidth="0.5"></circle>
            <circle className="text-primary" cx="100" cy="100" fill="none" r="40" stroke="currentColor" strokeWidth="0.5"></circle>
            <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="100" x2="100" y1="20" y2="180"></line>
            <line className="text-primary" stroke="currentColor" strokeWidth="0.5" x1="20" x2="180" y1="100" y2="100"></line>
            <polygon className="text-primary/30" fill="currentColor" points="100,40 160,80 140,150 60,150 40,80"></polygon>
          </svg>
          <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
            <span className="text-[10px] font-bold self-center">RIT</span>
            <div className="flex justify-between w-full">
              <span className="text-[10px] font-bold">DRI</span>
              <span className="text-[10px] font-bold">FIN</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-[10px] font-bold">DEF</span>
              <span className="text-[10px] font-bold">FÍS</span>
            </div>
            <span className="text-[10px] font-bold self-center">PAS</span>
          </div>
          <div className="absolute bg-background-dark/80 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
            <p className="text-primary font-bold text-xs">Classificação Geral: #14</p>
          </div>
        </div>
      </div>

      <div className="p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Objetivos Atuais</h3>
          <button className="text-primary text-sm font-medium">Ver Todos</button>
        </div>
        <div className="space-y-4">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-semibold">Gols na Semana</p>
              <p className="text-xs text-primary font-bold">4/5</p>
            </div>
            <div className="w-full bg-primary/20 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-semibold">Sessões de Treino</p>
              <p className="text-xs text-primary font-bold">12/15</p>
            </div>
            <div className="w-full bg-primary/20 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="px-4 flex justify-between items-center mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Vídeos Recentes</h3>
          <button className="text-primary text-sm font-medium flex items-center gap-1">
            Enviar <PlusCircle className="w-4 h-4" />
          </button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4">
          <div className="flex-none w-48 group">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-primary/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSx-dLQD9_sNSoZX1NASkXlYVL0C2jTjJ3c06IcqpPwGyVaQXge0EKgmFoz8aIgq2igAND3lahGd_aZe4tuU3Tz7t_Cdsp48gxQceGokt7L33K3bam7oyb637mPlYt4Gg6IdVKjze9MhtfSf7tuetxWOlbhk41jvKL9tdvaRlWTB4cwDhvcXdW3AkUISpmPZWnvgjmbp5SK7pmStZ5WwzUeveni7AANOXTAC9iaHEYeERjDZqix0G61wGZOMMfWu7gntZLzCM5b5Be')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-8 h-8" />
              </div>
              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 rounded">0:45</div>
            </div>
            <p className="mt-2 text-xs font-semibold truncate">Melhores Momentos vs FCB</p>
            <p className="text-[10px] text-slate-500">há 2 dias</p>
          </div>
          <div className="flex-none w-48 group">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-primary/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9LgYy4yMCA5RkxXYad3IRDSFwaU2eOvx6Me-LFt_0K9sECnmk5I6HarrkZJgUu2Nmkz_1141rtVUsGcqErKEDbP4rZAfaJ0vY8pfsMkDmd39Jo_CpNSrr5LylGoPgn7fQ0qWUjL3PO94MxmM2a6ddCCnQZCO66Gc39gm--QRhGCgg-BleNb8-c5KTWmT5TzEMHCFJFRSeMahXU8K77TxBMm-Z_m9R9x7We4rjHECNCJrb2hR8nuli5Z85AhaKSnoaue6XvVxU_lr0')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-8 h-8" />
              </div>
              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 rounded">1:20</div>
            </div>
            <p className="mt-2 text-xs font-semibold truncate">Treino de Velocidade - Sessão 1</p>
            <p className="text-[10px] text-slate-500">há 4 dias</p>
          </div>
          <div className="flex-none w-48 group">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-primary/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHXRNurEyoIdaEZMGt46Oa8Im7ZR0ogTirUfzih7BodiHPQMbdTT8wNWnd5U3-xnASPMgKkgcLcv08uG1NpP0GHBF0Vuk2wbmGI3J4DIFH7wtKopl0KIKayJSrA20EbXfU22Y-nDr67Qz3yIrDesqoMHni9UcJsbITilOnnqo3Q6QVKYLPrLkSdwdoM8uw7xYsSblpBhs7YHseN-vITg-4PlLwBNNSZ3DWYJjLSiemkl1Eo7gYsEIIQkLO-0P03C4uNGd4relHYI54')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="text-white w-8 h-8" />
              </div>
              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 rounded">0:30</div>
            </div>
            <p className="mt-2 text-xs font-semibold truncate">Treino de Falta</p>
            <p className="text-[10px] text-slate-500">há 1 semana</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
