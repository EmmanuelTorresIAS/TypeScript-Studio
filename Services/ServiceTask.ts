import { database, Database } from '../database/database';
import { ITask } from '../interfaces/ITask';

export class ServiceTask {
    constructor(private db: Database = database) {}
    public save(task: ITask): ITask {
        const taskToSave = {
            ...task,
            id: this.getNextId()
        };

        this.db.tasks.push(taskToSave);
        return taskToSave;
    }

    public findAll(): ITask[] {
        return [...this.db.tasks];
    }

    public findById(id: number): ITask | undefined {
        return this.db.tasks.find(task => task.id === id);
    }

    public update(id: number, taskData: Omit<ITask, 'id'>): ITask | undefined {
        const taskIndex = this.db.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return undefined;
        }

        this.db.tasks[taskIndex] = { id, ...taskData };
        return this.db.tasks[taskIndex];
    }

    public delete(id: number): boolean {
        const taskIndex = this.db.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return false;
        }

        this.db.tasks.splice(taskIndex, 1);
        return true;
    }

    private getNextId(): number {
        return this.db.tasks.length === 0
            ? 1
            : Math.max(...this.db.tasks.map(task => task.id)) + 1;
    }

}