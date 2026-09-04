import { ITask } from '../interfaces/ITask';
import { TaskStatus } from '../interfaces/TaskStatus';

export class Task implements ITask {
    private id: number;
    private title: string;
    private description: string;
    private status: TaskStatus;

    constructor(title: string, description: string, status: TaskStatus) {
        this.id = 1;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getStatus(): TaskStatus {
        return this.status;
    }

    public setStatus(status: TaskStatus): void {
        this.status = status;
    }

}