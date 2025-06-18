import { CircleChevronRightIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <>
      <form action="" className='form'>
        <div className="formRow">
          <DefaultInput
            type='text'
            id='meuInput'
            labelText='TASK'
            title='Inserir as Tasks'
            placeholder='Digite a tarefa'
          />
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