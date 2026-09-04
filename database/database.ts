import { ITask } from '../models/interfaces/ITask';
import { TaskStatus } from '../models/interfaces/TaskStatus';

export interface Database {
    tasks: ITask[];
}

export const database: Database = {
    tasks: [
        {
            id: 1,
            title: 'Aprender TypeScript',
            description: 'Estudiar interfaces y clases',
            status: TaskStatus.IN_PROGRESS
        },
        {
            id: 2,
            title: 'Crear servicio de tareas',
            description: 'Implementar las operaciones CRUD',
            status: TaskStatus.PENDING
        },
        {
            id: 3,
            title: 'Probar la aplicacion',
            description: 'Verificar que las tareas se guarden correctamente',
            status: TaskStatus.DONE
        }
    ]
};