import { Bell, User, Search, SlidersHorizontal, ChevronDown, SortAsc, Star, Zap, Target, ArrowUp } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

const players = [
  {
    id: 1,
    name: 'Mateo Silva',
    tag: 'Prospecto Pro',
    rank: 88,
    info: '19 • Meio-campo • Sporting CP',
    metricLabel: 'Velocidade: 35.1 km/h',
    metricIcon: Zap,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Kr7YUi2PV6df2TRbaIhIS94mvk9m_U4SaqYdIKd3QMFLRCjmBO7m3CCiv0XeS_YJ6ZNmOSShHS3EFN81gk1lqtXGmB9ZEBlePx0fi7kXTmSmMf2P9NXxtyNKnO-2wCAbOkCdkNEUM_0YQwVHRbAG1gBap8HQ0lOAWTqmFwoeUPtl5kxRvt7Cu_dZIzZIodfn8iUHPDVxxRL6E6GvytVF-ekKpdvjOi32k4cMO8gcsO7dYjqfmRvovmSq-sJ_KIsQXsj1S3BqhNQX',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    tag: 'Nível de Elite',
    rank: 91,
    info: '21 • Atacante • Ajax',
    metricLabel: 'Finalização: 94%',
    metricIcon: Target,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnQktcUwsgd46O07z75JkSGeMoSBBiO-0m3TRcmOQ29RPsdyavy6jkT7hIaHwbQIgTn1jSjDQ9rNfAK92dBPenhff86Bw1UPCSnfz45M1zlFLxBiVpeO8eqSzgw8dYndO28EHXVMH5mWviigdPCuJiiKtHhPP1CsozWBh5AwPNgX8vbrs5iYi0KQwI8aIWxPlH8k7Hc_Ld-6EUBsZpRU9Q3-loiE9TsbUoYxtZPBlU3ZvJvdaVB7iN7q4pTm7gDQZq1JhSh4x6v6Bv',
  },
  {
    id: 3,
    name: 'Luca Rossi',
    tag: 'Estrela em Ascensão',
    rank: 84,
    info: '18 • Zagueiro • AC Milan',
    metricLabel: 'Altura: 194 cm',
    metricIcon: ArrowUp,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEueGOb29JQemDfqEJMkabJGtJNy5rxdZkjI7DnzmDK4KIGDq45E68oOj52TD9rmRJyJz6YlD7IXlUxpjOXWsfOsCl6ipkHoiW5jTu_V39Q7cROW2Kpj9SncRitNcwGqrGbye0EGD_660LmzFA-T42GFgmdKqDTVMao6zah0cwmAfUKqAf_Xwsr_a-e9eoW6zNrJthgW6WBH1FXZbD1RMwRYGvKzg_0hCW6vMqK6LeAqVjsG4ojcU97szFFHix9OnJU_POshi1KmYO',
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    tag: 'Escolha do Analista',
    rank: 86,
    info: '20 • Ponta • Celtic FC',
    metricLabel: 'Agilidade: 92/100',
    metricIcon: Zap,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABkTiwn5jZ8J7FdiRpBynHfDZWyvU6jTcWw0aupgKZirAfqwqwGZ-gUneS40jWQlV-jXrsVn9tQ62pZ7EVx4K7l9PC1-uukWn_K0vnvCMvcB_Bt-vffajA1KtpGaYVFHrWDqkSUo61HUqq9KqXR8l-AjuNClD9GaLIGxbLkdPEepxzpZEKMqs_xtCliWLZi2CJQybtxGGbEsJDPIor2CRv8HXORHp3YbPkxDlI-Iru2fFV56DF_vMGa_a5VKVPv8bsVy3LlIqPXmiC',
  },
];

export function ScoutDiscovery() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-24">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center px-4 py-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <Search className="w-5 h-5" />
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
              Olheiro <span className="text-primary">BaseRank</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 text-primary border border-primary/20">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-primary text-background-dark">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto pb-24">
        <div className="px-4 py-6">
          <label className="relative flex flex-col w-full group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary">
              <Search className="w-6 h-6" />
            </div>
            <input
              className="w-full h-14 pl-12 pr-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg"
              placeholder="Busque jogadores, clubes ou regiões..."
            />
          </label>
        </div>

        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-background-dark px-4 font-semibold text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
          <div className="h-10 w-px bg-primary/20 shrink-0 mx-1"></div>
          {['Idade', 'Posição', 'Altura', 'Velocidade', 'Local', 'Clube', 'Pé'].map((filter) => (
            <button
              key={filter}
              className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 border border-primary/20 px-4 hover:bg-primary/20 transition-colors"
            >
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{filter}</span>
              <ChevronDown className="w-4 h-4 text-primary" />
            </button>
          ))}
        </div>

        <div className="px-4 py-6 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight flex items-center gap-2">
            Resultados Encontrados
            <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">
              124 Resultados
            </span>
          </h3>
          <div className="flex items-center gap-1 text-primary text-sm font-semibold cursor-pointer">
            Ordenar: Classificação
            <SortAsc className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {players.map((player) => {
            const Icon = player.metricIcon;
            return (
              <div
                key={player.id}
                className="bg-background-light dark:bg-primary/5 border border-primary/10 dark:border-primary/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-primary/20">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    src={player.image}
                    alt={player.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-background-dark/80 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">
                    {player.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-primary text-background-dark font-bold text-sm h-8 w-8 flex items-center justify-center rounded-lg shadow-lg">
                    {player.rank}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">{player.name}</h4>
                    <Star className="text-primary w-5 h-5 cursor-pointer hover:fill-current" />
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-3">{player.info}</p>
                  <div className="flex items-center justify-between p-2 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Principal Métrica</span>
                      <span className="text-primary font-bold text-sm">{player.metricLabel}</span>
                    </div>
                    <Icon className="text-primary/60 w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 flex justify-center">
          <button className="px-8 py-3 rounded-xl border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all">
            Carregar Mais Resultados
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
