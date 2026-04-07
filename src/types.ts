export type AppState = 'LANDING' | 'DISCLAIMER' | 'QUESTIONNAIRE' | 'RESULTS' | 'PROGRESS' | 'LOG' | 'SETTINGS';

export interface Question {
  id: number;
  section: string;
  text: string;
  options: string[];
}

export interface UserAnswers {
  [questionId: number]: number; // index of selected option
}

export interface LearningProfile {
  code: string;
  style: string;
  focus: string;
  memory: string;
  environment: string;
  scores: {
    visual: number;
    kinesthetic: number;
    auditory: number;
    focus: number;
    reading: number;
    logic: number;
    memory: number;
    social: number;
  };
}
