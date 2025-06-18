import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando a task chega ao final
  interrupDate: number | null; // quando a task for interrompida
  //type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
  type: keyof TaskStateModel['config'];
};