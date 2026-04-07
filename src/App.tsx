/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Landing from './components/Landing';
import Disclaimer from './components/Disclaimer';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import NebulaProgress from './components/NebulaProgress';
import NavigatorLog from './components/NavigatorLog';
import SettingsPage from './components/SettingsPage';
import { AppState, UserAnswers } from './types';

export default function App() {
  const [state, setState] = useState<AppState>('LANDING');
  const [answers, setAnswers] = useState<UserAnswers>({});

  const handleStart = () => setState('DISCLAIMER');
  const handleAcceptDisclaimer = () => setState('QUESTIONNAIRE');
  const handleFinishQuestionnaire = (finalAnswers: UserAnswers) => {
    setAnswers(finalAnswers);
    setState('RESULTS');
  };
  const handleRestart = () => {
    setAnswers({});
    setState('LANDING');
  };

  const navigateTo = (newState: AppState) => {
    setState(newState);
  };

  const currentScreen = useMemo(() => {
    switch (state) {
      case 'LANDING':
        return <Landing onStart={handleStart} />;
      case 'DISCLAIMER':
        return <Disclaimer onAccept={handleAcceptDisclaimer} onExit={handleRestart} />;
      case 'QUESTIONNAIRE':
        return <Questionnaire onFinish={handleFinishQuestionnaire} onRestart={handleRestart} onNavigate={navigateTo} />;
      case 'RESULTS':
        return <Results onRestart={handleRestart} onNavigate={navigateTo} />;
      case 'PROGRESS':
        return <NebulaProgress onNavigate={navigateTo} onRestart={handleRestart} />;
      case 'LOG':
        return <NavigatorLog onNavigate={navigateTo} onRestart={handleRestart} />;
      case 'SETTINGS':
        return <SettingsPage onNavigate={navigateTo} onRestart={handleRestart} />;
      default:
        return <Landing onStart={handleStart} />;
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 relative overflow-hidden font-sans">
      {/* Background Atmospheric elements */}
      <div className="fixed inset-0 z-0 celestial-glow pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative z-10 min-h-screen flex flex-col"
        >
          {currentScreen}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
