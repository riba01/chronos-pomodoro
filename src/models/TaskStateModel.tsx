import type { TaskModel } from './TaskModels';

// Estado -> Componente -> Pai -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, MainForm
  secondsRemaining: number; // CountDown, Historico, mainForm, Button
  formatedSecondsRemaning: string; // Titulo, CountDown
  activeTask: TaskModel | null; //CountDown, Historico, mainForm, Button
  currentCycle: number; // 1 a 8 Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};