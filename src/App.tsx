import './styles/theme.css';
import './styles/global.css';

import { Home } from './Pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {

    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />
            </MessagesContainer>
        </TaskContextProvider>
    );
}