// Inicializamos el arreglo de tareas
let tareas = [
    { descripcion: "Estudiar Javascript", completado: false },
    { descripcion: "Hacer ejercicio", completado: false },
    { descripcion: "Hacer tarea", completado: false },
    { descripcion: "Salir a correr", completado: false },
    { descripcion: "Lavar la ropa", completado: false },
    { descripcion: "Pasear al perro", completado: false },
    { descripcion: "Ordenar la sala", completado: false },
    { descripcion: "Preparar el almuerzo", completado: false },
    { descripcion: "Comprar víveres", completado: false },
    { descripcion: "Comer la cena", completado: false }
];

// Función para agregar una nueva tarea
function agregarTarea() {
    const descripcion = document.getElementById('descripcion').value;
    if (descripcion) {
        tareas.push({ descripcion: descripcion, completado: false });
        document.getElementById('descripcion').value = ''; // Limpiar el campo de entrada
        alert("Nueva tarea agregada...!!!");
    } else {
        alert("Por favor, ingresa una descripción para la nueva tarea...!!!");
    }
}

// Función para marcar una tarea como "completada"
function completarTarea() {
    const index = parseInt(document.getElementById('indexTarea').value) - 1;
    if (index >= 0 && index < tareas.length) {
        tareas[index].completado = true;
        alert(`La tarea ${index + 1} ha sido completada...!!!`);
    } else {
        alert("Por favor, ingresa un índice de tarea válido...!!");
    }
}

// Función para mostrar las tareas actualizadas
function mostrarTareas() {
    const listaPendientes = document.getElementById('listaPendientes');
    const listaCompletadas = document.getElementById('listaCompletadas');
    
    // Limpiar las listas antes de volver a renderizarlas
    listaPendientes.innerHTML = '';
    listaCompletadas.innerHTML = '';
    
    tareas.forEach((tarea, index) => {
        const estado = tarea.completado ? "Completada" : "Pendiente";
        const clase = tarea.completado ? 'completado' : '';
        const listaHTML = `<li class="${clase}">${index + 1}. ${tarea.descripcion} - ${estado}</li>`;

        if (tarea.completado) {
            listaCompletadas.innerHTML += listaHTML;
        } else {
            listaPendientes.innerHTML += listaHTML;
        }
    });
}

// Función para reiniciar el formulario a su estado inicial
function reiniciarFormulario1() {
    // Limpiar las listas de tareas
    document.getElementById('listaPendientes').innerHTML = '';
    document.getElementById('listaCompletadas').innerHTML = '';
    
    // Limpiar los campos de entrada
    document.getElementById('descripcion').value = '';
    document.getElementById('indexTarea').value = '';

    // Restaurar las tareas a su estado original
    tareas = [
        { descripcion: "Estudiar Javascript", completado: false },
        { descripcion: "Hacer ejercicio", completado: false },
        { descripcion: "Hacer tarea", completado: false },
        { descripcion: "Salir a correr", completado: false },
        { descripcion: "Lavar la ropa", completado: false },
        { descripcion: "Pasear al perro", completado: false },
        { descripcion: "Ordenar la sala", completado: false },
        { descripcion: "Preparar el almuerzo", completado: false },
        { descripcion: "Comprar víveres", completado: false },
        { descripcion: "Comer la cena", completado: false }
    ];
}