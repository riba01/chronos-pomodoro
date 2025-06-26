import { Trash2Icon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';

export function History() {
  const { state } = useTaskContext();
  /* const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  }); */
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: 'startDate',
      direction: 'desc'
    };
  });

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';
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

  return (
    <MainTemplate>

      <Container>
        <Heading>
          <h1>
            History
          </h1>
          <span className={styles.button}>
            <DefaultButton
              color='red'
              aria-label='Apagar todo o histórico'
              title='Apagar histórico'
            >
              <Trash2Icon />
            </DefaultButton>
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa</th>
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
        </div>
      </Container>

    </MainTemplate>
  );
}