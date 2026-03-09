import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, PlayCircle, User, Search, Newspaper, Settings, Dumbbell, Calendar, Compass, Star, FileText } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  // Define nav items based on the current route to match the HTML designs
  let navItems = [];

  if (path === '/profile') {
    navItems = [
      { path: '/', icon: Home, label: 'Início' },
      { path: '/scout', icon: Search, label: 'Buscar' },
      { path: '/profile', icon: User, label: 'Perfil' },
      { path: '/news', icon: Newspaper, label: 'Notícias' },
      { path: '/settings', icon: Settings, label: 'Ajustes' },
    ];
  } else if (path === '/analytics') {
    navItems = [
      { path: '/', icon: Home, label: 'Início' },
      { path: '/training', icon: Dumbbell, label: 'Treino' },
      { path: '/analytics', icon: BarChart2, label: 'Dados' },
      { path: '/profile', icon: User, label: 'Perfil' },
    ];
  } else if (path === '/highlights') {
    navItems = [
      { path: '/', icon: Home, label: 'Início' },
      { path: '/highlights', icon: PlayCircle, label: 'Vídeos' },
      { path: '/analytics', icon: BarChart2, label: 'Dados' },
      { path: '/profile', icon: User, label: 'Perfil' },
    ];
  } else if (path === '/plan') {
    navItems = [
      { path: '/', icon: Home, label: 'Início' },
      { path: '/training', icon: Dumbbell, label: 'Treino' },
      { path: '/plan', icon: Calendar, label: 'Plano' },
      { path: '/profile', icon: User, label: 'Perfil' },
    ];
  } else if (path === '/scout') {
    navItems = [
      { path: '/scout', icon: Compass, label: 'Olheiro' },
      { path: '/shortlist', icon: Star, label: 'Favoritos' },
      { path: '/reports', icon: FileText, label: 'Relatórios' },
      { path: '/settings', icon: Settings, label: 'Ajustes' },
    ];
  } else {
    // Default (Dashboard)
    navItems = [
      { path: '/', icon: Home, label: 'Início' },
      { path: '/analytics', icon: BarChart2, label: 'Dados' },
      { path: '/highlights', icon: PlayCircle, label: 'Vídeos' },
      { path: '/profile', icon: User, label: 'Perfil' },
    ];
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-primary/10 bg-background-light dark:bg-background-dark/95 backdrop-blur-md px-4 pb-6 pt-2">
      <div className="max-w-xl mx-auto flex w-full justify-between gap-2">
        {navItems.map((item) => {
          const isActive = path === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-1 flex-col items-center justify-end gap-1 ${
                isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'
              } transition-colors`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              <p className="text-[10px] font-bold uppercase tracking-wider">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
