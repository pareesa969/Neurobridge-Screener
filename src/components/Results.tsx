import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  CircleDashed, 
  BarChart3, 
  BookOpen, 
  Settings, 
  LogOut, 
  Eye, 
  Focus, 
  Cpu, 
  CheckCircle, 
  Pencil, 
  Kanban, 
  Moon, 
  VolumeX, 
  Network, 
  Download, 
  Copy, 
  RotateCcw, 
  UserCheck, 
  CloudOff, 
  MonitorCheck,
  Check,
  X,
  ArrowLeft
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { MOCK_PROFILE } from '../constants';
import { cn } from '../lib/utils';
import { AppState } from '../types';
import DashboardLayout from './DashboardLayout';

interface ResultsProps {
  onRestart: () => void;
  onNavigate: (state: AppState) => void;
}

export default function Results({ onRestart, onNavigate }: ResultsProps) {
  const pieData = [
    { name: 'Visual', value: 60, color: '#8fd6ff' },
    { name: 'Kinesthetic', value: 25, color: '#6c11af' },
    { name: 'Auditory', value: 15, color: '#00bfff' },
  ];

  const barData = [
    { name: 'Focus', value: 85 },
    { name: 'Reading', value: 70 },
    { name: 'Logic', value: 95 },
    { name: 'Memory', value: 60 },
    { name: 'Social', value: 40 },
  ];

  return (
    <DashboardLayout activeTab="RESULTS" onNavigate={onNavigate} onRestart={onRestart}>
      <div className="p-8 lg:p-12 space-y-12">
        {/* Hero Header */}
        <header className="space-y-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold font-headline text-primary tracking-tighter leading-none"
          >
            Learning Profile Code: <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">{MOCK_PROFILE.code}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl"
          >
            Your neural mapping is complete. This code identifies you as a <span className="text-secondary font-semibold">Visual-High Spatial-Focused</span> navigator. Your learning trajectory is optimized for immersive, pattern-based simulation and deep concentration protocols.
          </motion.p>
        </header>

        {/* Bento Grid Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Eye className="w-8 h-8 text-primary" />} 
            value="88%" 
            label="Learning Style" 
            title="Visual Primacy" 
            desc="You interpret complex data through spatial relationships and chromatic indicators." 
            color="primary"
          />
          <StatCard 
            icon={<Focus className="w-8 h-8 text-secondary" />} 
            value="92%" 
            label="Cognitive Focus" 
            title="Deep Concentration" 
            desc="Exceptional ability to sustain mental cycles on singular complex modules without decay." 
            color="secondary"
          />
          <StatCard 
            icon={<Cpu className="w-8 h-8 text-tertiary" />} 
            value="74%" 
            label="Memory Retentivity" 
            title="Associative Recall" 
            desc="Knowledge is stored as interconnected nodes rather than linear sequences." 
            color="tertiary"
          />
          <StatCard 
            icon={<Rocket className="w-8 h-8 text-primary-container" />} 
            value="65%" 
            label="Environment" 
            title="Low-Orbit Flux" 
            desc="Optimal performance occurs in sterile, high-tech environments with minimal variance." 
            color="primary-container"
          />
        </section>

        {/* Visualization Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pie Chart */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold font-headline">Style Distribution</h2>
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div className="h-64 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-xs uppercase text-slate-500 tracking-tighter">Primary</span>
                <span className="text-2xl font-bold font-headline text-primary">VISUAL</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {pieData.map((item, idx) => (
                <div key={idx}>
                  <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }} />
                  <p className="text-[10px] text-slate-400 uppercase">{item.name}</p>
                  <p className="text-sm font-bold">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold font-headline">Cognitive Strengths</h2>
              <BarChart3 className="w-6 h-6 text-secondary" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#87929b', fontSize: 10 }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#1e1e2f', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#8fd6ff" 
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Profile Summary */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface-container rounded-lg p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-bold font-headline text-on-surface">Synthesis Summary</h2>
            <ul className="space-y-4">
              <SummaryItem text="You learn best visually by mapping abstract concepts to multi-dimensional spatial representations." />
              <SummaryItem text="Complexity acts as a catalyst for your focus rather than a deterrent." />
              <SummaryItem text="Neural pathways favor asynchronous exploration over traditional linear curricula." />
            </ul>
          </div>
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-bold font-headline text-on-surface">Mission Protocols</h2>
            <div className="flex flex-wrap gap-3">
              <ProtocolChip icon={<Pencil className="w-4 h-4" />} label="Use diagrams" color="primary" />
              <ProtocolChip icon={<Kanban className="w-4 h-4" />} label="Break tasks" color="secondary" />
              <ProtocolChip icon={<Moon className="w-4 h-4" />} label="High-contrast UI" color="tertiary" />
              <ProtocolChip icon={<VolumeX className="w-4 h-4" />} label="Silent environment" color="primary-container" />
              <ProtocolChip icon={<Network className="w-4 h-4" />} label="Pattern matching" color="secondary-fixed-variant" />
            </div>
            <button 
              onClick={() => onNavigate('LOG')}
              className="mt-4 px-8 py-3 rounded-full bg-surface-bright text-primary font-bold border border-primary/50 hover:bg-primary hover:text-on-primary transition-all active:scale-95 shadow-[0_0_20px_rgba(143,214,255,0.1)]"
            >
              View Mission Records
            </button>
          </div>
        </section>
      </div>

      {/* Export Modal is handled by DashboardLayout */}
    </DashboardLayout>
  );
}

function StatCard({ icon, value, label, title, desc, color }: any) {
  const colorMap: any = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    tertiary: 'border-tertiary',
    'primary-container': 'border-primary-container',
  };

  return (
    <div className={cn(
      "glass-panel p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.2)] border-l-4 group hover:bg-surface-bright/40 transition-all",
      colorMap[color]
    )}>
      <div className="flex justify-between items-start mb-6">
        {icon}
        <span className={cn("text-3xl font-bold font-headline", `text-${color}`)}>{value}</span>
      </div>
      <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-2">{label}</h3>
      <p className="text-on-surface font-medium mb-1">{title}</p>
      <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
    </div>
  );
}

function SummaryItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
      <p className="text-on-surface-variant">{text}</p>
    </li>
  );
}

function ProtocolChip({ icon, label, color }: any) {
  const colorMap: any = {
    primary: 'bg-primary/10 border-primary/30 text-primary',
    secondary: 'bg-secondary/10 border-secondary/30 text-secondary',
    tertiary: 'bg-tertiary/10 border-tertiary/30 text-tertiary',
    'primary-container': 'bg-primary-container/10 border-primary-container/30 text-primary-container',
    'secondary-fixed-variant': 'bg-secondary-fixed-variant/10 border-secondary-fixed-variant/30 text-secondary-fixed-dim',
  };

  return (
    <div className={cn(
      "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border",
      colorMap[color]
    )}>
      {icon} {label}
    </div>
  );
}

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export function ExportModal({ onClose, onRestart }: { onClose: () => void, onRestart: () => void }) {
  const [copied, setCopied] = useState(false);
  
  const jsonPreview = {
    learningStyle: "Visual",
    focus: "Short",
    engagement: "Active",
    profileCode: "V-HS-F",
    timestamp: "2142-08-14T09:42:01Z"
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(jsonPreview, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-profile-${jsonPreview.profileCode}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add Title
    doc.setFontSize(22);
    doc.setTextColor(143, 214, 255); // Primary color
    doc.text('Mission Data: Learning Profile', 20, 20);
    
    // Add Profile Code
    doc.setFontSize(16);
    doc.setTextColor(108, 17, 175); // Secondary color
    doc.text(`Profile Code: ${jsonPreview.profileCode}`, 20, 35);
    
    // Add Details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Learning Style: ${jsonPreview.learningStyle}`, 20, 50);
    doc.text(`Cognitive Focus: ${jsonPreview.focus}`, 20, 60);
    doc.text(`Engagement Type: ${jsonPreview.engagement}`, 20, 70);
    doc.text(`Timestamp: ${new Date(jsonPreview.timestamp).toLocaleString()}`, 20, 80);
    
    // Add a footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('© 2142 Astral Navigator Systems. Generated via Secure Pulse.', 20, 280);
    
    doc.save(`learning-profile-${jsonPreview.profileCode}.pdf`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonPreview, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl w-full glass-panel rounded-lg overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border-outline-variant/15 border"
      >
        <div className="p-10 flex flex-col items-center text-center relative">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-high transition-colors text-slate-400 hover:text-on-surface"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-20 h-20 mb-6 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(143,214,255,0.2)]">
            <Download className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-2 tracking-tight">Mission Data Ready</h2>
          <p className="text-on-surface-variant font-sans mb-10 max-w-md">Your celestial learning profile has been calculated and is ready for extraction into the local systems.</p>
          
          <div className="w-full bg-surface-container-lowest/50 rounded-lg p-6 mb-10 text-left border border-outline-variant/20 relative group">
            <div className="absolute top-3 right-3 text-[10px] text-slate-500 font-label tracking-widest uppercase">JSON EXPORT PREVIEW</div>
            <pre className="font-mono text-sm text-primary-fixed-dim leading-relaxed overflow-x-auto">
              <code>{JSON.stringify(jsonPreview, null, 2)}</code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <button 
              onClick={handleDownloadJSON}
              className="flex items-center justify-center gap-2 py-4 px-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm hover:shadow-[0_0_20px_rgba(143,214,255,0.4)] transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              JSON
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 py-4 px-4 rounded-full bg-gradient-to-r from-secondary to-secondary-container text-on-secondary font-headline font-bold text-sm hover:shadow-[0_0_20px_rgba(108,17,175,0.4)] transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-4 px-4 rounded-full border border-outline-variant/30 text-on-surface font-headline font-medium text-sm hover:bg-primary/10 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <button 
              onClick={onClose}
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Mission
            </button>
            <button 
              onClick={onRestart}
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Restart Questionnaire
            </button>
          </div>
        </div>

        <div className="bg-surface-container-high/50 px-10 py-4 flex justify-between items-center border-t border-outline-variant/10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-label text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" />
              Anonymous tool
            </span>
            <span className="text-[10px] font-label text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <CloudOff className="w-4 h-4" />
              No data saved
            </span>
          </div>
          <span className="text-[10px] font-label text-primary uppercase tracking-widest flex items-center gap-1.5">
            <MonitorCheck className="w-4 h-4" />
            Runs in browser
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

