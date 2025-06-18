import type { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaning: number;
  formatedSecondsRemaning: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};