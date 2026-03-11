import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, User, MapPin, Ruler, Weight, Footprints, ChevronRight, Loader2, LogOut } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface AthleteProfile {
  id: string;
  full_name: string;
  birth_date: string;
  nationality: string;
  position: string;
  preferred_foot: string;
  height: number;
  weight: number;
  club: string;
}

const POSITIONS = ['Todos', 'Goleiro', 'Zagueiro', 'Lateral Direito', 'Lateral Esquerdo', 'Volante', 'Meio-Campo', 'Meia Atacante', 'Ponta Esquerda', 'Ponta Direita', 'Centroavante'];

const POSITION_SHORT: Record<string, string> = {
  'Goleiro': 'GOL',
  'Zagueiro': 'ZAG',
  'Lateral Direito': 'LD',
  'Lateral Esquerdo': 'LE',
  'Volante': 'VOL',
  'Meio-Campo': 'MC',
  'Meia Atacante': 'MEI',
  'Ponta Esquerda': 'PE',
  'Ponta Direita': 'PD',
  'Centroavante': 'CA',
};

function calculateAge(birthDate: string): number | null {
  if (!birthDate) return null;
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function getInitials(name: string): string {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Dashboard() {
  const navigate = useNavigate();
  const [athletes, setAthletes] = useState<AthleteProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('Todos');

  useEffect(() => {
    async function fetchAthletes() {
      const { data, error } = await supabase
        .from('athlete_profiles')
        .select('*')
        .order('full_name', { ascending: true });

      if (error) {
        console.error('Erro ao buscar atletas:', error);
      } else {
        setAthletes(data || []);
      }
      setLoading(false);
    }
    fetchAthletes();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const filtered = athletes.filter((a) => {
    const matchesSearch =
      !searchQuery ||
      a.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.club?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.position?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPosition =
      selectedPosition === 'Todos' || a.position === selectedPosition;

    return matchesSearch && matchesPosition;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark font-display flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 bg-gradient-to-tr from-primary to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
          <span className="text-2xl font-black text-background-dark">BR</span>
        </div>
        <p className="text-primary font-bold tracking-widest uppercase text-xs animate-pulse">Carregando Atletas...</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-primary/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-gradient-to-tr from-primary to-emerald-400 rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
            <span className="text-sm font-black text-background-dark">BR</span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">
            BaseRank
          </h1>
        </div>
        <div className="flex-1" />
        <Link
          to="/setup"
          className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary mr-2 hover:bg-primary/20 transition-colors"
          title="Cadastrar Atleta"
        >
          <User className="w-5 h-5" />
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center justify-center rounded-lg h-10 w-10 bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
          title="Sair"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </header>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por nome, clube ou posição..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm"
          />
        </div>
      </div>

      {/* Position Filters */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 py-3">
        {POSITIONS.map((pos) => (
          <button
            key={pos}
            onClick={() => setSelectedPosition(pos)}
            className={`flex-none px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedPosition === pos
                ? 'bg-primary text-background-dark shadow-md shadow-primary/30'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:border-primary/30 hover:text-primary'
              }`}
          >
            {pos === 'Todos' ? 'Todos' : POSITION_SHORT[pos] || pos}
          </button>
        ))}
      </div>

      {/* Athletes Count */}
      <div className="px-4 pb-2 flex items-center justify-between">
        <p className="text-slate-500 text-xs font-medium">
          {filtered.length} {filtered.length === 1 ? 'atleta encontrado' : 'atletas encontrados'}
        </p>
      </div>

      {/* Athletes List */}
      <div className="px-4 space-y-3 flex-1">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <User className="w-10 h-10 text-slate-600" />
            </div>
            <p className="text-slate-500 text-sm font-medium text-center">
              {athletes.length === 0
                ? 'Nenhum atleta cadastrado ainda.'
                : 'Nenhum atleta encontrado com esses filtros.'}
            </p>
            {athletes.length === 0 && (
              <Link
                to="/setup"
                className="mt-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl text-sm hover:bg-emerald-400 transition-colors shadow-md shadow-primary/20"
              >
                Cadastrar Primeiro Atleta
              </Link>
            )}
          </div>
        ) : (
          filtered.map((athlete) => {
            const age = calculateAge(athlete.birth_date);
            const posShort = POSITION_SHORT[athlete.position] || athlete.position;

            return (
              <Link
                key={athlete.id}
                to={`/profile/${athlete.id}`}
                className="group block bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/20 rounded-2xl p-4 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative flex-none">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-600/20 border border-primary/10 flex items-center justify-center">
                      <span className="text-primary font-black text-lg">{getInitials(athlete.full_name)}</span>
                    </div>
                    {posShort && (
                      <div className="absolute -bottom-1 -right-1 bg-primary text-background-dark text-[9px] font-black px-1.5 py-0.5 rounded-md shadow-sm">
                        {posShort}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-100 font-bold text-[15px] truncate group-hover:text-primary transition-colors">
                      {athlete.full_name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      {athlete.club && (
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3 h-3" />
                          {athlete.club}
                        </span>
                      )}
                      {age && (
                        <span className="text-slate-500 text-xs">
                          • {age} anos
                        </span>
                      )}
                      {athlete.nationality && (
                        <span className="text-slate-500 text-xs">
                          • {athlete.nationality}
                        </span>
                      )}
                    </div>

                    {/* Valências */}
                    <div className="flex items-center gap-3 mt-2">
                      {athlete.preferred_foot && (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-1 rounded-lg">
                          <Footprints className="w-3 h-3" />
                          {athlete.preferred_foot}
                        </span>
                      )}
                      {athlete.height && (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-1 rounded-lg">
                          <Ruler className="w-3 h-3" />
                          {athlete.height}cm
                        </span>
                      )}
                      {athlete.weight && (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-1 rounded-lg">
                          <Weight className="w-3 h-3" />
                          {athlete.weight}kg
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-primary group-hover:translate-x-1 transition-all flex-none" />
                </div>
              </Link>
            );
          })
        )}
      </div>

      <BottomNav />
    </div>
  );
}
