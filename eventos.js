
//El contenido del documento debe de estar todo cargado
document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('.container');   //Accede al div - clase

div.addEventListener('click', () => {           //Añade el manejador de eventos para el click 
    alert('¡Hola! Soy el div');
});
});
