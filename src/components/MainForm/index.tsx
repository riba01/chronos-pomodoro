import { CircleChevronRightIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /* console.log('Deu certo'); */
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
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </div>
        <div className='formRow'>
          <p>Próximo intervalo é de 25min</p>
        </div>
        <div className='formRow'>
          <Cycles />
        </div>
        <div className='formRow'>
          <DefaultButton color='green'>
            < CircleChevronRightIcon />
          </DefaultButton>
        </div>
      </form>
    </>
  );
}