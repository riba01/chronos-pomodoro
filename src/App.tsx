import './styles/theme.css';
import './styles/global.css';

import { Home } from './Pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaning: 0,
    formatedSecondsRemaning: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

export function App() {

    const [state, setState] = useState(initialState);

    return <Home state={state} setState={setState} />;
}