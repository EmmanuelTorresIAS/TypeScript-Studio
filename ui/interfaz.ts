import { ServiceTask } from '../Services/ServiceTask';
import { TaskStatus } from '../interfaces/TaskStatus';
import { ITask } from '../interfaces/ITask';
import { rl } from './consoleConfig';
import { question,registerTask, updateTask, serviceTask } from './app';


export const interfaz = async (): Promise<void> => {
	let option: string;

	do {
		console.log('\n1. Ver tareas');
		console.log('2. Agregar tarea');
		console.log('3. Actualizar tarea');
		console.log('4. Buscar tarea por id');
		console.log('5. Eliminar tarea');
		console.log('0. Salir');

		option = await question('Selecciona una opcion: ');

		switch (option) {
			case '1':
				console.table(serviceTask.findAll());
				break;
			case '2':
				await registerTask();
				break;
			case '3':
				await updateTask();
				break;
			case '4': {
				const id = Number(await question('Id de la tarea: '));
				console.log(serviceTask.findById(id) ?? 'No se encontro la tarea.');
				break;
			}
			case '5': {
				const id = Number(await question('Id de la tarea: '));
				console.log(serviceTask.delete(id) ? 'Tarea eliminada.' : 'No se encontro la tarea.');
				break;
			}
			case '0':
				rl.close();
				break;
			default:
				console.log('Opcion no valida.');
		}
	} while (option !== '0');
};