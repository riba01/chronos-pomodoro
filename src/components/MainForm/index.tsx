import { CircleChevronRightIcon, CircleStopIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModels';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycles } from '../../utils/getNextCycles';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';


export function MainForm() {
  const { state, dispatch } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  /* ciclos */
  const nextCycle = getNextCycles(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);



  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //apaga as msg da tela
    showMessage.dismiss();
    /* console.log('Deu tudo certo'); */
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.info('Digite a tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrupDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    showMessage.success('Tarefa iniciada');
  }

  function handleInterruptTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    showMessage.dismiss();
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
    showMessage.error('Tarefa interrompida');
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} action="" className='form'>
        <div className="formRow">
          <DefaultInput
            type='text'
            id='meuInput'
            labelText='TASK'
            title='Inserir as Tasks'
            placeholder='Digite a tarefa'
            ref={taskNameInput}
            disabled={!!state.activeTask}
            defaultValue={lastTaskName}
          />
        </div>
        <div className='formRow'>
          <Tips />
        </div>
        {
          state.currentCycle !== 0 &&
          (
            <div className='formRow'>
              <Cycles />
            </div>
          )
        }
        <div className='formRow'>
          {!state.activeTask ? (
            <DefaultButton
              color='green'
              type='submit'
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tarefa'
              key='botao_submit'
            >
              < CircleChevronRightIcon />
            </DefaultButton>
          ) : (
            <DefaultButton
              color='red'
              type='button'
              aria-label='Interromper a tarefa atual'
              title='Interromper a tarefa atual'
              onClick={handleInterruptTask}
              key='botao_buttom'
            >
              < CircleStopIcon />
            </DefaultButton>
          )
          }

        </div>
      </form>
    </>
  );
}