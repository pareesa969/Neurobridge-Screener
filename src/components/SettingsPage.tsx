import { motion } from 'motion/react';
import DashboardLayout from './DashboardLayout';
import { AppState } from '../types';
import { Settings, Moon, Sun, Bell, Shield, Database } from 'lucide-react';

interface SettingsPageProps {
  onNavigate: (state: AppState) => void;
  onRestart: () => void;
}

export default function SettingsPage({ onNavigate, onRestart }: SettingsPageProps) {
  const settings = [
    { id: 1, icon: <Moon className="w-6 h-6 text-primary" />, title: 'Interface Theme', desc: 'Celestial Dark Mode (Default)', action: 'Toggle' },
    { id: 2, icon: <Bell className="w-6 h-6 text-secondary" />, title: 'Notifications', desc: 'Mission alerts and trajectory updates.', action: 'Configure' },
    { id: 3, icon: <Shield className="w-6 h-6 text-tertiary" />, title: 'Privacy Protocol', desc: 'Zero-Retention architecture active.', action: 'Review' },
    { id: 4, icon: <Database className="w-6 h-6 text-primary-container" />, title: 'Local Storage', desc: 'Temporary cache allocation: 2.4MB.', action: 'Clear' },
  ];

  return (
    <DashboardLayout activeTab="SETTINGS" onNavigate={onNavigate} onRestart={onRestart}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <span className="text-primary font-headline text-sm tracking-[0.2em] uppercase block mb-2">System Configuration</span>
          <h1 className="text-4xl font-headline font-bold text-on-surface">Settings</h1>
        </header>

        <div className="grid gap-6">
          {settings.map((s, idx) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-lg flex items-center justify-between group hover:bg-surface-bright/40 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              </div>
              <button className="px-6 py-2 rounded-full border border-outline/20 text-on-surface-variant font-medium hover:bg-primary/10 hover:text-primary transition-all">
                {s.action}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8 rounded-lg border-l-4 border-error">
          <h3 className="text-2xl font-headline font-bold text-error mb-4">Danger Zone</h3>
          <p className="text-on-surface-variant mb-6">Resetting the mission will permanently dissolve all ephemeral learning nodes and restart the protocol.</p>
          <button 
            onClick={onRestart}
            className="px-8 py-3 bg-error/10 text-error border border-error/30 font-bold rounded-full hover:bg-error hover:text-on-error transition-all"
          >
            Reset All Mission Data
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
