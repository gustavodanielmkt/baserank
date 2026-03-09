import { ArrowLeft, Search, Filter, Play } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router-dom';

const videos = [
  {
    id: 1,
    title: 'Chute no Ângulo - Partida da Liga',
    date: '24 Out, 2023 • Rodada 12',
    duration: '0:45',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJMo1S5ajsCXqRdU7cSF89hmewKcc_TfIMyjrLLP_0fEHxjCkClV9xjtyIxnyyNPyfHs0EtQ_Mh-ej4H0VXASPmD-hx-pMFOX062x2C70Bft9W-xOk8mZ_IVCT6Cf4nySAgC2bxBB0wyn2Qfhqo-CgGs0EKulFZLTSKKcLXNRe0taNwcMvcLQIj1qedNqK8B0C3TgG9UASSA0CE_Pz-cmLiWiezAqsJhhS5XLkdqPTBE6VfxETY9LvqQ4FWRXQyqzPoXfnxmX1n9-Z',
  },
  {
    id: 2,
    title: 'Voleio Indefensável',
    date: '18 Out, 2023 • Melhores Momentos',
    duration: '0:12',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1g_0mh2INp_F2Lq6HZyX0iYwwAv5rbBGQQRouOl5DPI3wLe9hafFeasgDqLLhBY1wX4HXN2vds1wBES7rYqZmrxbQT07oePuSSoPkNAkjhSpfRsMwl1sV29gpmB3IGWwgX1PLMyWNbuuOCKdyiHoiNxSkxoPAyJDsTe6sV8_pOf-Ho3PkiSL8CQjBYHdKDiczeyrIRWAZCsaaxtjOwZ3D9U9lOLcisd4FaM6nfwpPAYDvEe1xGcOfSQALvsTpJ_G2xVHwWIIqG-Q4',
  },
  {
    id: 3,
    title: 'Arrancada e Finalização Fria',
    date: '12 Out, 2023 • Jogo Fora',
    duration: '1:05',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBu2jyVSSA2kO3xhyg2fQ6yJIOq5QQM323IywN3p6STe-_1330pC3Es2E_MhOSeFLdaAzy0cbPC3OkNlrYLJTn7e-zv8IOL1HKtMsX-AmCKeteEZYbVapFiJ8Pgg99tCEcEwOs8vETCSg3jVU0g_AQEUun3alPzhyMheJyhymTqbjhmNmg5L4LBZwb3sPP3SXqCc9OS9Ehfy4Fjney51i32-DQj5Nm8oD__NUA3SjtR8nn0oiJhxsZnhZ2O8TT4-DE-Z3jMS0bIybI6',
  },
  {
    id: 4,
    title: 'Cabeçada Forte - Escanteio',
    date: '05 Out, 2023 • Final da Copa',
    duration: '0:28',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuQDKflIWozScV4Kq1NDaLEGlWU2a4IjerD1HrNEBYat77gSRXsBWT1mY0xtr2Qbn9qp2FRfgCnz2NQ3a9KGf-L70FK_HXhKYZevoNIcSvjJ8qjjkm-PbHqJwGRUZNCTxmdfQfuV_W3YgT2U4EHoqc57NX-8w09c24m02ocXMja8Om9GepL9hJt6rX_0OSOdIDr1QRUPJmEBfd7pMLeMzg5I3SXHsap-MMRFuGIBCjlgoBIiI3raSplUwW5rFT1GCouzpaYlh-bAe7',
  },
  {
    id: 5,
    title: "Gol da Vitória Aos 90'",
    date: '28 Set, 2023 • Dia de Clássico',
    duration: '0:55',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_8CufRLg8EVotOzDY8crEYW5PCsS2llPXsMPo85eEiFU2NM0W69rm237jX6NTZNfCY4q260c6AiblaL9xKfWasSY7d_5GNdqKKs1PSv-LgvHGZS6waKRnLJ76yBu4FIBdIf9ITasDfolMEDSOPiQfF2NCSUA2xDK8pMrvZ5ul2UOHBxeNnAm2Ww5N7jvcyo6tjPXXovFssxlhz8C8iyGlUAZXw1W3h5ZMctYY7KxLaJtZrpc_XMhaaPC9gRbmXPYTMMz2FIIiAYG',
  },
  {
    id: 6,
    title: 'Sessão de Precisão #14',
    date: '25 Set, 2023 • Treino',
    duration: '2:30',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdgxxAnGL7u1EQfujP8WxgtwcLa0OdjjOlTWDzIvkYQ-tWRePItLxK57DWwL9Iv5tUvQ7dSLTrEcIgB60h_EGt64luORI_0H0lMMFTBuh_b3OucugrBmLmwi_qoK4HEM0UJT8xrVRLZlS5-lF6VbzjERNHOdAHBGQXTFDhE1zWoPax9ZEJ-bvHu4X_MKfz78hFScwbOYPNgNerVK8cIlzlBs-K0sKIxxIwQoV0ghpJ2ozrvl2KuACJLF5-jgEYGYBPYJectwHgBvl7',
  },
];

export function Highlights() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col pb-20">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                <ArrowLeft className="text-slate-900 dark:text-slate-100 w-6 h-6" />
              </button>
            </Link>
            <h1 className="text-xl font-bold tracking-tight">Vídeos BaseRank</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Search className="text-slate-900 dark:text-slate-100 w-5 h-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
              <Filter className="text-slate-900 dark:text-slate-100 w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="border-b border-primary/5">
          <div className="flex overflow-x-auto no-scrollbar px-4 gap-6 max-w-5xl mx-auto">
            <a
              className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 shrink-0"
              href="#"
            >
              <p className="text-sm font-bold">Gols</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary pb-3 pt-4 shrink-0 transition-colors"
              href="#"
            >
              <p className="text-sm font-bold">Assistências</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary pb-3 pt-4 shrink-0 transition-colors"
              href="#"
            >
              <p className="text-sm font-bold">Finalização</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary pb-3 pt-4 shrink-0 transition-colors"
              href="#"
            >
              <p className="text-sm font-bold">Duelos Aéreos</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary pb-3 pt-4 shrink-0 transition-colors"
              href="#"
            >
              <p className="text-sm font-bold">Posicionamento</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary pb-3 pt-4 shrink-0 transition-colors"
              href="#"
            >
              <p className="text-sm font-bold">Treinos</p>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative flex flex-col gap-3 rounded-xl bg-primary/5 border border-primary/10 overflow-hidden hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
                <img
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={video.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-300">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 z-20 bg-background-dark/70 px-2 py-1 rounded text-[10px] font-bold text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-bold text-base line-clamp-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  {video.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
