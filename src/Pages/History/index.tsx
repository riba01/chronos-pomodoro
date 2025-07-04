import { Trash2Icon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { useEffect, useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { showMessage } from '../../adapters/showMessage';


export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTask = state.tasks.length > 0;
  /* const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  }); */
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: [],
      field: 'startDate',
      direction: 'desc'
    };
  });
  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field
      }),
    }));
  }, [state.tasks]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const isSameField = sortTasksOptions.field === field;
    const newDirection = isSameField && sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field: field
      }),
      direction: newDirection,
      field: field
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm('Tem certeza?', reason => {
      /* console.log(reason) */;
      setConfirmClearHistory(reason);
      if (reason) {
        dispatch({ type: TaskActionsTypes.RESET_STATE });
      }
    });
    /*  console.log('Reset'); */
    /* if (!confirm('Tem certeza')) return;
    dispatch({ type: TaskActionsTypes.RESET_STATE }); */
  }
  useEffect(() => {
    if (!confirmClearHistory) return;
    /*  console.log('APAGAR HISTÓRICO'); */
    setConfirmClearHistory(false);

  }, [confirmClearHistory, dispatch]);
  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };

  }, []);

  useEffect(() => {
    document.title = 'History - Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>

      <Container>
        <Heading>
          <h1>
            History
          </h1>
          {hasTask && (
            <span className={styles.button}>
              <DefaultButton
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              >
                <Trash2Icon />
              </DefaultButton>
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          {
            hasTask && (
              <table>
                <thead>
                  <tr>
                    <th role='button' className={styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa</th>
                    <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'duration' })}>Duração</th>
                    <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'startDate' })}>Data</th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sortTasksOptions.tasks.map(task => {
                      const taskTypeDictionary = {
                        workTime: 'Foco',
                        shortBreakTime: 'Descanso curto',
                        longBreakTime: 'Descanso longo',

                      };
                      return (
                        <tr key={task.id}>
                          <td>{task.name}</td>
                          <td>{task.duration}</td>
                          <td>{formatDate(task.startDate)}</td>
                          <td>{getTaskStatus(task, state.activeTask)}</td>
                          <td>{taskTypeDictionary[task.type]}</td>
                        </tr>
                      );
                    }
                    )
                  }
                </tbody>
              </table>
            )
          }
          {
            !hasTask && (
              <p className={styles.noTask}>Não há tarefas</p>
            )
          }
        </div>
      </Container>

    </MainTemplate>
  );
}