import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { TaskReducer } from './taskReducer';
import { TaskActionsTypes } from './taskActions';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { loadBeep } from '../../utils/loadBeep';

type TaskContentProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState);

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    /* console.log(countDownSeconds); */
    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      });
    }
  });

  useEffect(() => {
    /* console.log(state); */
    if (!state.activeTask) {
      console.log('Worker terminado');
      worker.terminate();
    }
    document.title = `Chronos Pomodoro - ${state.formatedSecondsRemaning}`;
    worker.postMessage(state);
  }, [state, worker]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>

  );
}
