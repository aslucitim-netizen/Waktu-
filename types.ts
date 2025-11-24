export interface TimerState {
  timeLeft: number;
  isActive: boolean;
  isFinished: boolean;
  targetTime: number | null;
}

export interface AgendaItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export enum TimerMode {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED'
}