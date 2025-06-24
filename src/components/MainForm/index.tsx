import { CircleChevronRightIcon, CircleStopIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModels';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycles } from '../utils/getNextCycles';
import { getNextCycleType } from '../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  /* ciclos */
  const nextCycle = getNextCycles(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);


  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /* console.log('Deu tudo certo'); */
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite a tarefa!');
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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaning: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });

  }

  function handleInterruptTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaning: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interrupDate: Date.now() };
          }
          return task;
        }

        )

      };
    });
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
          />
        </div>
        <div className='formRow'>
          <p>Próximo intervalo é de 25min</p>
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