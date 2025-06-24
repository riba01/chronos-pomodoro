import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { TaskReducer } from './taskReducer';

type TaskContentProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState);
  useEffect(() => {

  }, [state]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>

  );
}
