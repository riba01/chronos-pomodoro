import { useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContentProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContentProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string,
    payload?: number
  }

  const [myState, dispatchState] = useReducer((state, action: ActionType) => {
    console.log(state, action);
    switch (action.type) {
      case 'Increment':
        {
          if (!action.payload) return state;

          return {
            ...state, secondsRemaning: state.secondsRemaning + action.payload
          };
        }
    }
    return state;
  }, {
    secondsRemaning: 0
  },
  );

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatchState({ type: 'Increment', payload: 10 })}>
        Incrementar +10
      </button>
      {children}
    </TaskContext.Provider>

  );
}
