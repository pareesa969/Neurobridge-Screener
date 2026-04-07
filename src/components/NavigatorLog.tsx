import { motion } from 'motion/react';
import DashboardLayout from './DashboardLayout';
import { AppState } from '../types';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

interface NavigatorLogProps {
  onNavigate: (state: AppState) => void;
  onRestart: () => void;
}

export default function NavigatorLog({ onNavigate, onRestart }: NavigatorLogProps) {
  const logs = [
    { id: 1, date: '2142-08-14T09:42:01Z', title: 'Mission Start', content: 'Protocol initiated. Deep space learning environment established. User identity: Navigator Alpha.' },
    { id: 2, date: '2142-08-14T09:45:12Z', title: 'Cognitive Sync', content: 'Focus and attention parameters being mapped. Initial data suggests high visual primacy and spatial reasoning.' },
    { id: 3, date: '2142-08-14T09:50:00Z', title: 'Neural Pathway Detected', content: 'Trajectory identified as V-HS-F. Asynchronous exploration protocols being prepared for curriculum generation.' },
  ];

  return (
    <DashboardLayout activeTab="LOG" onNavigate={onNavigate} onRestart={onRestart}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <span className="text-primary font-headline text-sm tracking-[0.2em] uppercase block mb-2">Mission Records</span>
          <h1 className="text-4xl font-headline font-bold text-on-surface">Navigator Log</h1>
        </header>

        <div className="space-y-8">
          {logs.map((log, idx) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/10 transition-all" />
              <div className="flex items-center gap-4 mb-4 text-slate-500 text-xs uppercase tracking-widest font-bold">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(log.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Sector 7-G
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">{log.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">{log.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            className="px-8 py-3 border border-outline/20 text-on-surface-variant font-medium rounded-full hover:bg-surface-bright/50 transition-all"
          >
            Add Log Entry
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
