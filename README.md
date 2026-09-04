# Sistema de tareas

Aplicacion de consola desarrollada con TypeScript para administrar tareas.

## Funcionalidades

- Ver todas las tareas
- Agregar una tarea
- Actualizar una tarea
- Buscar una tarea por ID
- Eliminar una tarea

## Temas utilizados
- POO, encapsulamiento
- Promises, async, await
- interfaces, enum, tipos
- Depency Injection

- Clean code, un poco de SOLID, DRY


## Requisitos

- Node.js
- npm

## Instalacion

 - Clona el Repositorio 
```bash
git clone https://github.com/EmmanuelTorresIAS/TypeScript-Studio.git
cd taskManagementSystem
```

Instala las dependencias:

```bash
npm install
```

## Ejecucion

Inicia la aplicacion con:

```bash
npm run start
```

Selecciona una opcion del menu y sigue las instrucciones de la consola. Para cerrar la aplicacion, selecciona `0`.

## Estructura principal

```text
database/       Base de datos temporal en memoria
interfaces/     Interfaces y estados de las tareas
models/         Clase Task
Services/       Logica de operaciones sobre tareas
ui/             Menu de consola
```


