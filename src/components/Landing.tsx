import { motion } from 'motion/react';
import { Rocket, User, Settings, Brain, Gauge, Sparkles, ArrowRight } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 relative">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="text-2xl font-headline font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent tracking-tight">
          Adaptive Learning Profile Tool
        </div>
        <div className="flex gap-6 items-center">
          <User className="w-6 h-6 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
          <Settings className="w-6 h-6 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </nav>

      <main className="w-full max-w-4xl flex flex-col items-center text-center mt-16">
        {/* Header Section */}
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-4"
          >
            Adaptive Learning <br /> <span className="text-primary">Profile Tool</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-light text-on-surface-variant tracking-wide opacity-80 max-w-lg mx-auto"
          >
            Discover how you learn best
          </motion.p>
        </header>

        {/* Centered Interactive Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-10 md:p-14 rounded-lg shadow-[20px_0px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group max-w-2xl w-full"
        >
          {/* Decorative orbital line */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg fill="none" height="100%" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeDasharray="4 4" strokeWidth="0.5" className="text-primary" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center justify-center p-4 bg-primary/10 rounded-full text-primary shadow-[0_0_12px_rgba(143,214,255,0.2)]">
              <Rocket className="w-10 h-10" />
            </div>
            <p className="text-on-surface font-light text-xl md:text-2xl leading-relaxed mb-10 max-w-md mx-auto">
              Answer 15 quick questions to generate your personalized learning profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <button 
                onClick={onStart}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-full shadow-[0_0_20px_rgba(143,214,255,0.4)] hover:shadow-[0_0_30px_rgba(143,214,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
              >
                <span className="flex items-center gap-2">
                  Start Questionnaire
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              {/* Secondary CTA */}
              <button className="px-8 py-4 border border-outline/20 text-on-surface-variant font-medium rounded-full hover:bg-surface-bright/50 transition-all duration-300 active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Profile Elements (Floating Context) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-40">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-outline">Cognitive Flux</p>
                <p className="text-sm font-headline text-on-surface">Visual / Spatial</p>
              </div>
            </div>
            <div className="flex items-center gap-4 translate-x-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                <Gauge className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-outline">Retention Velocity</p>
                <p className="text-sm font-headline text-on-surface">Accelerated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-40">
          <div className="flex flex-col gap-8 items-end">
            <div className="flex items-center gap-4 text-right">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-outline">Pathway</p>
                <p className="text-sm font-headline text-on-surface">Neural Mapping</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                <Sparkles className="w-6 h-6 text-tertiary" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-8 py-4 bg-background/90 border-t border-outline-variant/15 backdrop-blur-md">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-slate-500">
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            Anonymous tool
          </span>
          <span className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-slate-500">
            <span className="w-2 h-2 rounded-full bg-secondary/40" />
            No data saved
          </span>
          <span className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-slate-500">
            <span className="w-2 h-2 rounded-full bg-tertiary/40" />
            Runs in browser
          </span>
        </div>
        <div className="text-[10px] font-label text-slate-600 tracking-widest">
          © 2142 Astral Navigator Systems. All data transmitted via secure pulse.
        </div>
      </footer>
    </div>
  );
}
