import { motion } from 'motion/react';
import DashboardLayout from './DashboardLayout';
import { AppState } from '../types';
import { CircleDashed, CheckCircle2, Timer } from 'lucide-react';

interface NebulaProgressProps {
  onNavigate: (state: AppState) => void;
  onRestart: () => void;
}

export default function NebulaProgress({ onNavigate, onRestart }: NebulaProgressProps) {
  const milestones = [
    { id: 1, title: 'Protocol Initiation', status: 'completed', desc: 'Disclaimer accepted and session started.' },
    { id: 2, title: 'Cognitive Mapping', status: 'in-progress', desc: 'Currently analyzing focus and attention parameters.' },
    { id: 3, title: 'Neural Synthesis', status: 'pending', desc: 'Final profile generation and trajectory calculation.' },
  ];

  return (
    <DashboardLayout activeTab="PROGRESS" onNavigate={onNavigate} onRestart={onRestart}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <span className="text-primary font-headline text-sm tracking-[0.2em] uppercase block mb-2">Mission Status</span>
          <h1 className="text-4xl font-headline font-bold text-on-surface">Nebula Progress</h1>
        </header>

        <div className="grid gap-6">
          {milestones.map((m, idx) => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-lg flex items-start gap-6 border-l-4 border-primary"
            >
              <div className="mt-1">
                {m.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-primary" />}
                {m.status === 'in-progress' && <CircleDashed className="w-6 h-6 text-secondary animate-spin" />}
                {m.status === 'pending' && <Timer className="w-6 h-6 text-slate-600" />}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-headline font-bold text-on-surface">{m.title}</h3>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded ${
                    m.status === 'completed' ? 'bg-primary/10 text-primary' : 
                    m.status === 'in-progress' ? 'bg-secondary/10 text-secondary' : 
                    'bg-slate-800 text-slate-500'
                  }`}>
                    {m.status}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8 rounded-lg text-center">
          <h3 className="text-2xl font-headline font-bold text-primary mb-4">Trajectory Estimate</h3>
          <div className="flex justify-center items-end gap-2 mb-6">
            <span className="text-5xl font-headline font-bold text-on-surface">12</span>
            <span className="text-slate-500 uppercase tracking-widest text-xs mb-2">Minutes Remaining</span>
          </div>
          <button 
            onClick={() => onNavigate('QUESTIONNAIRE')}
            className="px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:shadow-[0_0_20px_rgba(143,214,255,0.4)] transition-all"
          >
            Resume Assessment
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
