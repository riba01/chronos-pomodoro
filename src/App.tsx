import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { CircleChevronRightIcon } from 'lucide-react';
import { Footer } from './components/Footer';


export function App() {
    /* Lazy initialization */
    /* const [numero, setNumero] = useState(()=>{
        console.log('Realiza alguma operação e depois retorna o valor');
        return 0;
    }); 
     function handleClick() {
        setNumero(numero => numero + 1);
    }
    */
    /* const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero(numero => numero + 1);
    } */

    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
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
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    );
};