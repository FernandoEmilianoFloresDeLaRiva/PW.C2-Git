# Git
## Tabla de contenido.
- [¿Qué es Git?](#¿que-es-git?)
- [Comandos fundamentales](#comandos-fundamentales)
- [Conceptos claves](#conceptos-claves)
- [Características avanzadas](#características-avanzadas)

## ¿Qué es Git? 
La colaboración entre desarrolladores y el seguimiento de proyectos de software es posible con Git, un sistema de control de versiones distribuido que gestiona de manera eficiente los cambios realizados en el código fuente.

## Comandos fundamentales

- `git init`: Inicializa un nuevo repositorio Git en un directorio.

- `git clone URL`: Clona un repositorio remoto en tu máquina local.

- `git add archivo`: Agrega cambios en archivos al área de preparación (staging).

- `git commit -m "Mensaje"`: Crea un nuevo commit con los cambios en el área de preparación y un mensaje descriptivo.

- `git pull`: Obtiene cambios desde un repositorio remoto y los fusiona en tu rama actual.

- `git push`: Envía tus cambios locales a un repositorio remoto.

- `git branch`: Lista las ramas locales y muestra en cuál estás trabajando actualmente.

- `git checkout rama`: Cambia a una rama específica.

- `git merge rama`: Fusiona los cambios de una rama en la rama actual.

- `git status`: Muestra el estado actual de tu repositorio local.


## Conceptos claves

- **Repositorio (Repository)**: Un repositorio Git es un directorio que almacena todos los archivos, historial de cambios y metadatos relacionados con un proyecto. Puede ser local (en tu computadora) o remoto (en un servidor).

- **Commit**: Un commit en Git es un conjunto de cambios que se registra en el historial del repositorio. Cada commit tiene un mensaje que describe los cambios realizados.

- **Rama (Branch)**: Una rama en Git es una línea de desarrollo independiente que se crea a partir de la rama principal (generalmente llamada "master" o "main"). Las ramas se utilizan para trabajar en nuevas características o solucionar problemas sin afectar la rama principal.

- **Conflictos (Conflicts)**: Los conflictos de Git ocurren cuando dos o más cambios entran en conflicto y Git no puede determinar automáticamente cómo fusionarlos. Debes resolver estos conflictos manualmente.

- **El flujo de trabajo básico de Git**: Implica la creación de commits para registrar cambios, la posibilidad de trabajar en ramas separadas y la sincronización con un repositorio remoto para colaborar eficientemente en proyectos de software. Git ofrece una estructura sólida para el desarrollo de software en equipo y el seguimiento preciso de los cambios en un proyecto.


## Características avanzadas

- **Rebase**:
La operación de rebasing es una forma de reorganizar la historia de los commits en una rama. `git rebase rama`

- **Etiquetas(Tags)**:
Las etiquetas son referencias estáticas a puntos específicos en la historia del repositorio. `git tag v1.0.0`

- **Solicitudes de Extracción (Pull Requests)**: Permiten a los colaboradores proponer cambios en un repositorio y solicitar que los cambios se fusionen en la rama principal.