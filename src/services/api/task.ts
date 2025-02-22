import { api } from '../api';
// Define CreateTaskDTO if it does not exist in '../../types'
export interface CreateTaskDTO {
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  assignedTo?: string;
  clientId?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  assignedTo?: string;
  clientId?: string;
  status: 'pending' | 'in-progress' | 'completed';
}
export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
  id: string;
  status?: 'pending' | 'in-progress' | 'completed';
}

export const taskService = {
  getAll: () => 
    api.get<Task[]>('/tasks'),

  getById: (id: string) => 
    api.get<Task>(`/tasks/${id}`),

  getByClient: (clientId: string) => 
    api.get<Task[]>(`/clients/${clientId}/tasks`),

  create: (data: CreateTaskDTO) => 
    api.post<Task>('/tasks', data),

  update: ({ id, ...data }: UpdateTaskDTO) => 
    api.put<Task>(`/tasks/${id}`, data),

  delete: (id: string) => 
    api.delete<void>(`/tasks/${id}`),

  updateStatus: (id: string, status: Task['status']) => 
    api.put<Task>(`/tasks/${id}/status`, { status }),
};