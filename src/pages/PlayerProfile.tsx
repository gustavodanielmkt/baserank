import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Bookmark, Activity, TrendingUp, TrendingDown, Dribbble, LogOut, MapPin, Ruler, Weight, Footprints, Calendar, Flag, Loader2 } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link, useParams, useNavigate } from 'react-router-dom';
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

export function PlayerProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<AthleteProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!id) { setLoading(false); return; }

      const { data, error } = await supabase
        .from('athlete_profiles')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) console.error(error);
      if (data) setProfile(data);

      // Verificar se é o próprio perfil
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.id === id) setIsOwner(true);

      setLoading(false);
    }
    loadProfile();
  }, [id]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-dark font-display flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-primary font-bold tracking-widest uppercase text-xs">Carregando Perfil...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background-dark font-display flex flex-col items-center justify-center gap-4 text-slate-400">
        <p>Atleta não encontrado.</p>
        <Link to="/" className="text-primary font-bold text-sm hover:underline">Voltar à Lista</Link>
      </div>
    );
  }

  const age = calculateAge(profile.birth_date);
  const posShort = POSITION_SHORT[profile.position] || profile.position;

  return (
    <div className="font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/">
              <ArrowLeft className="text-slate-900 dark:text-slate-100 cursor-pointer w-6 h-6" />
            </Link>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
              Perfil do Atleta
            </h2>
          </div>
          <div className="flex gap-2">
            {isOwner && (
              <>
                <Link
                  to="/setup"
                  className="px-3 py-1.5 rounded-lg text-primary hover:bg-primary/10 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Editar
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-500/10 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Sair
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 space-y-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative w-full md:w-48 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-emerald-600/10 border-2 border-primary/20 flex items-center justify-center">
            <span className="text-primary font-black text-6xl">{getInitials(profile.full_name)}</span>
            {posShort && (
              <div className="absolute bottom-3 right-3 bg-primary text-background-dark text-sm font-black px-3 py-1 rounded-lg shadow-md">
                {posShort}
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{profile.full_name}</h1>
                <p className="text-primary font-medium">
                  {profile.club || 'Sem Clube'} • {profile.position || 'Posição não definida'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1"><Calendar className="w-3 h-3" /> Idade</p>
                <p className="text-2xl font-bold text-primary">{age || '—'}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1"><Flag className="w-3 h-3" /> Nacionalidade</p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{profile.nationality || '—'}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1"><Ruler className="w-3 h-3" /> Altura</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{profile.height ? `${profile.height}cm` : '—'}</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1"><Weight className="w-3 h-3" /> Peso</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{profile.weight ? `${profile.weight}kg` : '—'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vital Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="text-primary w-5 h-5" />
                Estatísticas Vitais
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Posição</p>
                  <p className="font-semibold">{profile.position || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Pé Dominante</p>
                  <p className="font-semibold">{profile.preferred_foot || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Nacionalidade</p>
                  <p className="font-semibold">{profile.nationality || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Altura</p>
                  <p className="font-semibold">{profile.height ? `${profile.height} cm` : '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Peso</p>
                  <p className="font-semibold">{profile.weight ? `${profile.weight} kg` : '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Idade</p>
                  <p className="font-semibold">{age ? `${age} anos` : '—'}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary w-5 h-5" />
                  Pontos Fortes
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic">Dados de desempenho serão preenchidos conforme o atleta for avaliado.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="text-red-500 w-5 h-5" />
                  Pontos Fracos
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic">Dados de desempenho serão preenchidos conforme o atleta for avaliado.</p>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-slate-100 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-4">Informações</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary w-5 h-5 flex-none" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Clube</p>
                    <p className="font-semibold text-sm">{profile.club || 'Sem Clube'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Footprints className="text-primary w-5 h-5 flex-none" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Pé Dominante</p>
                    <p className="font-semibold text-sm">{profile.preferred_foot || '—'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Flag className="text-primary w-5 h-5 flex-none" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Nacionalidade</p>
                    <p className="font-semibold text-sm">{profile.nationality || '—'}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
