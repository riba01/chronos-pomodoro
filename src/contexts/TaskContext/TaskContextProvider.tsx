import { useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContentProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, setState] = useState(initialTaskState);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>

  );
}
