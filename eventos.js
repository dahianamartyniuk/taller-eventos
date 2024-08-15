
//El contenido del documento debe de estar todo cargado
document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('.container');   //Accede al div - clase
    const button = document.querySelector('.button');

div.addEventListener('click', () => {           //Añade el manejador de eventos para el click 
    alert('¡Hola! Soy el div');

// Manejador del evento click para el botón
button.addEventListener('click', (event) => {
    // Detiene la propagación del evento click hacia el div
    event.stopPropagation();
    alert('¡Haz clic en el botón!');


});
});
});