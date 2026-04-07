import { ReactNode, useState } from 'react';
import { 
  Rocket, 
  CircleDashed, 
  BarChart3, 
  BookOpen, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';
import { AppState } from '../types';
import { cn } from '../lib/utils';
import { AnimatePresence } from 'motion/react';
import { ExportModal } from './Results';

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab: AppState;
  onNavigate: (state: AppState) => void;
  onRestart: () => void;
  onExport?: () => void;
  title?: string;
}

export default function DashboardLayout({ children, activeTab, onNavigate, onRestart, onExport, title = "Adaptive Learning Profile Tool" }: DashboardLayoutProps) {
  const [showExport, setShowExport] = useState(false);

  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      setShowExport(true);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-headline font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent tracking-tight">
            {title}
          </span>
          <div className="hidden md:flex gap-6">
            <button onClick={() => onNavigate('LANDING')} className="text-slate-400 hover:text-primary transition-colors font-headline text-sm tracking-tight">Explorer</button>
            <button onClick={() => onNavigate('QUESTIONNAIRE')} className={cn("font-headline text-sm tracking-tight transition-colors", activeTab === 'QUESTIONNAIRE' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-primary")}>Curriculum</button>
            <button onClick={() => onNavigate('RESULTS')} className={cn("font-headline text-sm tracking-tight transition-colors", activeTab === 'RESULTS' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-primary")}>Celestial Map</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <User className="w-6 h-6 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
          <Settings onClick={() => onNavigate('SETTINGS')} className="w-6 h-6 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] z-40 flex flex-col p-4 bg-background shadow-[20px_0px_40px_rgba(0,0,0,0.4)] w-64 hidden md:flex">
        <div className="flex flex-col gap-2 flex-grow">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary-container p-[2px]">
              <img 
                src="https://picsum.photos/seed/navigator/100/100" 
                alt="Astral Navigator Profile" 
                className="w-full h-full rounded-full bg-surface-container-lowest object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-primary font-bold text-sm">Navigator Alpha</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest">Deep Space Learning</div>
            </div>
          </div>
          
          <NavItem 
            icon={<Rocket className="w-5 h-5" />} 
            label="Stellar Core" 
            active={activeTab === 'QUESTIONNAIRE'} 
            onClick={() => onNavigate('QUESTIONNAIRE')}
          />
          <NavItem 
            icon={<CircleDashed className="w-5 h-5" />} 
            label="Nebula Progress" 
            active={activeTab === 'PROGRESS'} 
            onClick={() => onNavigate('PROGRESS')}
          />
          <NavItem 
            icon={<BarChart3 className="w-5 h-5" />} 
            label="Orbital Data" 
            active={activeTab === 'RESULTS'} 
            onClick={() => onNavigate('RESULTS')}
          />
          <NavItem 
            icon={<BookOpen className="w-5 h-5" />} 
            label="Navigator Log" 
            active={activeTab === 'LOG'} 
            onClick={() => onNavigate('LOG')}
          />
          <NavItem 
            icon={<Settings className="w-5 h-5" />} 
            label="Systems" 
            active={activeTab === 'SETTINGS'} 
            onClick={() => onNavigate('SETTINGS')}
          />
        </div>

        <div className="mt-auto space-y-4">
          <button 
            onClick={handleExport}
            className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(143,214,255,0.4)] transition-all"
          >
            Export Mission Data
          </button>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent" />
          <button 
            onClick={onRestart}
            className="text-slate-600 hover:text-slate-400 flex items-center gap-4 px-4 py-2 transition-all opacity-80 hover:opacity-100 w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow md:pl-64 pt-16 pb-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-8 py-3 bg-background/90 border-t border-outline-variant/15 backdrop-blur-md">
        <div className="flex gap-6 mb-2 md:mb-0">
          <FooterLink label="Privacy Protocol" />
          <FooterLink label="Terms of Engagement" />
          <FooterLink label="Support Flux" />
        </div>
        <span className="text-[10px] text-slate-500 tracking-wider">© 2142 Astral Navigator Systems. All data transmitted via secure pulse.</span>
      </footer>

      {/* Export Modal */}
      <AnimatePresence>
        {showExport && (
          <ExportModal onClose={() => setShowExport(false)} onRestart={onRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 px-4 py-3 transition-all duration-300 rounded-r-full w-full text-left",
        active 
          ? "bg-surface-bright/60 text-primary shadow-[0_0_12px_rgba(143,214,255,0.3)]" 
          : "text-slate-500 hover:text-slate-200 hover:bg-surface-container"
      )}
    >
      {icon}
      <span className="text-sm uppercase tracking-widest">{label}</span>
    </button>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-slate-600 hover:text-primary transition-all text-[10px] uppercase tracking-widest">
      {label}
    </a>
  );
}
