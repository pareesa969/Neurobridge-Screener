import { motion } from 'motion/react';
import { Shield, Info } from 'lucide-react';

interface DisclaimerProps {
  onAccept: () => void;
  onExit: () => void;
}

export default function Disclaimer({ onAccept, onExit }: DisclaimerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <main className="relative z-10 w-full max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-secondary-fixed rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header Section */}
          <div className="px-8 pt-10 pb-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container/10 mb-6">
              <Shield className="w-10 h-10 text-secondary-container" />
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-on-secondary-fixed leading-tight mb-2">
              Protocol Engagement Disclaimer
            </h1>
            <p className="font-body text-on-secondary-fixed-variant/70 text-sm tracking-wide uppercase">
              PLEASE REVIEW THE NEBULA LEARNING PARAMETERS
            </p>
          </div>

          {/* Content Area */}
          <div className="px-8 flex-grow overflow-y-auto custom-scrollbar pb-6">
            <div className="space-y-6 text-on-secondary-fixed-variant leading-relaxed font-body py-4">
              <section>
                <h2 className="font-headline font-bold text-lg text-on-secondary-fixed mb-2">1. Educational Intent</h2>
                <p className="text-sm">
                  The Adaptive Learning Profile Tool (ALPT) is a simulated environment designed for the exploration of cognitive growth and structural learning maps. It functions as a heuristic guide rather than a definitive academic certification platform. All metrics displayed are part of the astral learning metaphor used within this interface.
                </p>
              </section>
              <section>
                <h2 className="font-headline font-bold text-lg text-on-secondary-fixed mb-2">2. Data Sovereignty & Anonymity</h2>
                <p className="text-sm">
                  In alignment with our deep-space privacy protocols, this tool operates on a "Zero-Retention" architecture. We do not store, cache, or transmit your session data to external central cores. Once the navigation window is terminated, all ephemeral learning nodes are dissolved into the vacuum.
                </p>
              </section>
              <section>
                <h2 className="font-headline font-bold text-lg text-on-secondary-fixed mb-2">3. User Responsibility</h2>
                <p className="text-sm">
                  As an Astral Navigator, you acknowledge that the outputs generated are based on current systemic algorithms. The "Celestial Map" and "Curriculum" paths are projections for self-reflection and personal developmental planning only.
                </p>
              </section>
              <div className="p-4 bg-secondary-container/5 rounded-xl border border-secondary-container/10 flex gap-4 items-start">
                <Info className="w-5 h-5 text-secondary-container mt-1 shrink-0" />
                <p className="text-xs italic opacity-80">
                  Note: By clicking 'Accept & Continue', you authorize the temporary allocation of local cache resources for the duration of this session.
                </p>
              </div>
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="px-8 py-8 bg-secondary-fixed flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onAccept}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-full shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 active:scale-[0.98]"
              >
                Accept & Continue
              </button>
              <button 
                onClick={onExit}
                className="flex-1 px-8 py-4 bg-transparent border-2 border-outline-variant/30 text-on-secondary-fixed font-headline font-medium rounded-full hover:bg-secondary-container/5 transition-all duration-300"
              >
                Exit
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sticky Footer Attachment */}
        <footer className="mt-6 flex justify-center">
          <div className="glass-panel px-6 py-2 rounded-full border border-outline-variant/20 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#8fd6ff]" />
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/80">
              Privacy Note: No data saved. Fully anonymous.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
