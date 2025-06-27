import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';


export function Settings() {
  //pegar o valor padrão do contexto
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    /* console.log('ENVIADO', Date.now()); */
    const workTime = Number(workTimeInputRef.current?.value);
    const shorBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    /*  console.log(workTime, shorBreakTime, longBreakTime); */
    if (isNaN(workTime) || !Number.isInteger(workTime)) {
      showMessage.error('Por favor, use apenas números inteiros para Foco');
      return;
    }
    if (isNaN(shorBreakTime) || !Number.isInteger(shorBreakTime)) {
      showMessage.error('Por favor, use apenas números inteiros para descanso curto');
      return;
    }
    if (isNaN(longBreakTime) || !Number.isInteger(longBreakTime)) {
      showMessage.error('Por favor, use apenas números inteiros para descanso longo');
      return;
    }

    if (workTime < 1 || workTime > 90) {
      showMessage.error('Digite um número entre 1 e 90 para descanso foco');
      return;
    }
    if (shorBreakTime < 1 || shorBreakTime > 20) {
      showMessage.error('Digite um número entre 1 e 20 para descanso curto');
      return;
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error('Digite um número entre 1 e 60 para descanso longo');
      return;
    }

  }

  return (
    <MainTemplate>

      <Container>
        Configurações
      </Container>
      <Container>
        <p>
          Modifique as configurações para tempo de foco, descanso curso e descanso longo
        </p>
      </Container>
      <Container>
        <form action='' className='form' onSubmit={handleSaveSettings}>
          <div className="formRow">
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInputRef}
              defaultValue={state.config['workTime']}
              type='number'
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInputRef}
              defaultValue={state.config['shortBreakTime']}
              type='number'
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInputRef}
              defaultValue={state.config['longBreakTime']}
              type='number'
            />
          </div>
          <div className="formRow">
            <DefaultButton
            >
              <SaveIcon />
            </DefaultButton>
          </div>

        </form>
      </Container>

    </MainTemplate>
  );
}