import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycles } from '../../utils/getNextCycles';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStop = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  };
  return (
    <div className={styles.cycles}>
      <span>
        Ciclos:
      </span>
      <div className={styles.cyclesDots}>
        {
          cycleStop.map((_, index) => {
            const nextCycle = getNextCycles(index);
            const nextCycleType = getNextCycleType(nextCycle);
            return (
              <span
                key={`${nextCycle}_${nextCycleType}`}
                className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              ></span>
            );
          })
        }
        {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}

      </div>

    </div>
  );
}