import { useState, useEffect } from 'react';
import { Bell, User, Search, SlidersHorizontal, ChevronDown, SortAsc, Star, Zap, Target, ArrowUp } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { supabase } from '../lib/supabase';

// Map de ícones baseados no texto vindo do banco de dados
const IconMap: Record<string, any> = { Zap, Target, ArrowUp };

export function ScoutDiscovery() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      // Busca os jogadores inseridos no Supabase
      const { data, error } = await supabase.from('players').select('*').order('rank', { ascending: false });

      if (error) {
        console.error('Erro ao buscar do Supabase:', error);
      } else if (data) {
        setPlayers(data);
      }
      setLoading(false);
    }
    fetchPlayers();
  }, []);

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
              {loading ? '...' : players.length} Resultados
            </span>
          </h3>
          <div className="flex items-center gap-1 text-primary text-sm font-semibold cursor-pointer">
            Ordenar: Classificação
            <SortAsc className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
          {loading ? (
            <div className="text-primary p-4 col-span-full font-bold">Carregando dados do Supabase...</div>
          ) : players.length === 0 ? (
            <div className="text-slate-500 p-4 col-span-full">Nenhum jogador encontrado. Rode o script SQL no seu banco!</div>
          ) : (
            players.map((player) => {
              const Icon = IconMap[player.metric_icon] || Zap;
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
                        <span className="text-primary font-bold text-sm">{player.metric_label}</span>
                      </div>
                      <Icon className="text-primary/60 w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
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
