import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
    const texto: string = 'Olá Mundo!';
    return (
        <>

            <Heading>{texto}</Heading>
        </>
    );
};