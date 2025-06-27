// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)

import type { TaskModel } from '../../models/TaskModels';
import type { TaskStateModel } from '../../models/TaskStateModel';

// ✅ Definição dos tipos de ações como objeto constante
export const TaskActionsTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  CHANCE_SETTINGS: 'CHANCE_SETTINGS',
} as const;

// ✅ Extrai os valores possíveis para o tipo
export type TaskActionType = keyof typeof TaskActionsTypes;

// ✅ Define o modelo da action
export type TaskActionModel =
  | {
      type: typeof TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionsTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: typeof TaskActionsTypes.CHANCE_SETTINGS;
      payload: TaskStateModel['config'];
    }
  | {
      type: typeof TaskActionsTypes.COMPLETE_TASK;
    }
  | {
      type: typeof TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionsTypes.RESET_STATE;
    };
