import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  CircleDashed, 
  BarChart3, 
  BookOpen, 
  Settings, 
  LogOut, 
  ArrowLeft, 
  ArrowRight,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { QUESTIONS } from '../constants';
import { UserAnswers, AppState } from '../types';
import { cn } from '../lib/utils';
import DashboardLayout from './DashboardLayout';

interface QuestionnaireProps {
  onFinish: (answers: UserAnswers) => void;
  onRestart: () => void;
  onNavigate: (state: AppState) => void;
}

export default function Questionnaire({ onFinish, onRestart, onNavigate }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  const question = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onFinish(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSelectOption = (index: number) => {
    setAnswers(prev => ({ ...prev, [question.id]: index }));
  };

  return (
    <DashboardLayout activeTab="QUESTIONNAIRE" onNavigate={onNavigate} onRestart={onRestart}>
      <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        {/* Specific Questionnaire Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-12 z-10">
        {/* Progress Header */}
        <div className="mb-12 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-primary font-headline text-sm tracking-[0.2em] uppercase block mb-2">Navigator Assessment</span>
              <h1 className="text-4xl font-headline font-bold text-on-surface">Step {currentStep + 1} of {QUESTIONS.length}</h1>
            </div>
            <div className="text-right">
              <span className="text-primary text-2xl font-headline font-bold">{Math.round(progress)}%</span>
              <span className="text-slate-500 text-xs block uppercase tracking-widest">Efficiency Sync</span>
            </div>
          </div>
          {/* Electric Progress Bar */}
          <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_10px_rgba(143,214,255,0.6)]" 
            />
          </div>
        </div>

        {/* Questionnaire Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container/20 to-primary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative glass-card bg-surface-container-high/80 text-on-surface p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-primary/10 backdrop-blur-xl">
              <div className="flex flex-col gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-secondary-container" />
                    <span className="text-secondary-container font-headline text-xs font-bold uppercase tracking-widest">{question.section}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold leading-tight">
                    {question.text}
                  </h2>
                </div>

                {/* Options / Slider Emulation */}
                <div className="py-12 px-4">
                  <div className="relative h-24 flex items-center justify-center">
                    <div className="absolute w-full h-1 bg-surface-container-highest/20 rounded-full" />
                    
                    {/* Active Fill */}
                    <motion.div 
                      className="absolute left-0 h-1 bg-primary rounded-full"
                      animate={{ width: answers[question.id] !== undefined ? `${(answers[question.id] / (question.options.length - 1)) * 100}%` : '0%' }}
                    />

                    {/* Options as clickable points */}
                    <div className="absolute w-full flex justify-between">
                      {question.options.map((option, idx) => (
                        <div key={idx} className="relative flex flex-col items-center">
                          <button 
                            onClick={() => handleSelectOption(idx)}
                            className={cn(
                              "w-4 h-4 rounded-full border-2 transition-all duration-300 z-20",
                              answers[question.id] === idx 
                                ? "bg-primary border-primary shadow-[0_0_15px_rgba(143,214,255,0.8)] scale-150" 
                                : "bg-surface-container-highest border-transparent hover:bg-primary/50"
                            )}
                          />
                          <div className={cn(
                            "absolute top-8 whitespace-nowrap text-[10px] font-bold uppercase tracking-tighter transition-all duration-300",
                            answers[question.id] === idx ? "text-primary scale-110" : "text-secondary-container/60"
                          )}>
                            {option}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
                  <button 
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="order-2 md:order-1 text-secondary-container/50 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-secondary-container transition-colors disabled:opacity-30"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={answers[question.id] === undefined}
                    className="order-1 md:order-2 flex-grow md:flex-none py-4 px-10 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm uppercase tracking-widest shadow-[0_10px_20px_rgba(0,191,255,0.3)] hover:shadow-[0_15px_30px_rgba(0,191,255,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === QUESTIONS.length - 1 ? 'Generate Profile' : 'Initiate Next Phase'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Contextual Hint Bento */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="surface-container p-6 rounded-lg flex items-start gap-4">
            <Lightbulb className="w-10 h-10 text-primary bg-primary/10 p-2 rounded-sm shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-on-surface mb-1">Navigation Tip</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Deep focus durations help our algorithm structure your 'Stellar Core' curriculum intervals for maximum retention.</p>
            </div>
          </div>
          <div className="surface-container p-6 rounded-lg flex items-start gap-4">
            <TrendingUp className="w-10 h-10 text-secondary bg-secondary/10 p-2 rounded-sm shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-on-surface mb-1">Assessment Data</h4>
              <p className="text-xs text-slate-400 leading-relaxed">92% of top-tier navigators report a starting focus threshold of 15–30 minutes during initial synchronization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
);
}
