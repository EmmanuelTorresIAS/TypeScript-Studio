import { TaskStatus } from './TaskStatus';

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}