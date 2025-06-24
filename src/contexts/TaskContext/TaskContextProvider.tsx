import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { TaskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';

type TaskContentProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);
    if (countDownSeconds <= 0) {
      console.log('Terminou');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [state, worker]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>

  );
}
