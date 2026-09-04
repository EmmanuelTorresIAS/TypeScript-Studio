import { ServiceTask } from '../Services/ServiceTask';
import { TaskStatus } from '../interfaces/TaskStatus';
import { ITask } from '../interfaces/ITask';
import { rl } from './consoleConfig';
import { interfaz } from './interfaz';



export const serviceTask = new ServiceTask();

export const question = (message: string): Promise<string> => {
	return new Promise(resolve => rl.question(message, resolve));
};

export const readStatus = (value: string): TaskStatus => {
	const status = Number(value);

	if (!Object.values(TaskStatus).includes(status)) {
		return TaskStatus.PENDING;
	}

	return status;
};

export const registerTask = async (): Promise<void> => {
	const title = await question('Titulo: ');
	const description = await question('Descripcion: ');
	const status = await question('Estado (0: En progreso, 1: Hecha, 2: Pendiente): ');

	const task: ITask = serviceTask.save({
		id: 0,
		title,
		description,
		status: readStatus(status)
	});

	console.log('Tarea guardada:', task);
};

export const updateTask = async (): Promise<void> => {
	const id = Number(await question('Id de la tarea: '));
	const title = await question('Nuevo titulo: ');
	const description = await question('Nueva descripcion: ');
	const status = await question('Nuevo estado (0: En progreso, 1: Hecha, 2: Pendiente): ');

	const task = serviceTask.update(id, {
		title,
		description,
		status: readStatus(status)
	});

	console.log(task ? 'Tarea actualizada.' : 'No se encontro la tarea.');
};




interfaz();