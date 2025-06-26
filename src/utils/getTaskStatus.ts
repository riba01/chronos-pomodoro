import type { TaskModel } from '../models/TaskModels';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'Completa';
  if (task.interrupDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em progresso';
  return 'Abandonada';
}
