import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function CountDown() {
    const { state } = useTaskContext();
    //console.log(state);
    return (
        <div className={styles.countDown}>
            {state.formatedSecondsRemaning}
        </div>
    );

}