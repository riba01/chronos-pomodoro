import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycles } from '../../utils/getNextCycles';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionsTypes, type TaskActionModel } from './taskActions';

export function TaskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycles(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        config: { ...state.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaning: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        config: { ...state.config },
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaning: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interrupDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.COMPLETE_TASK: {
      return {
        ...state,
        config: { ...state.config },
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaning: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionsTypes.RESET_STATE: {
      return state;
    }
    case TaskActionsTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formatedSecondsRemaning: formatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }
  }
}
