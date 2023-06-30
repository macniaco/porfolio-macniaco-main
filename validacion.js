// Validación del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var website = document.getElementById("website").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Realizar validaciones
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre");
        event.preventDefault(); // Evita el envío del formulario
        return;
    }
    if (email.trim() === "") {
        alert("Por favor, ingresa tu email");
        event.preventDefault(); // Evita el envío del formulario
        return;
    }
    if (asunto.trim() === "") {
        alert("Por favor, ingresa un asunto");
        event.preventDefault(); // Evita el envío del formulario
        return;
    }
    if (mensaje.trim() === "") {
        alert("Por favor, ingresa tu mensaje");
        event.preventDefault(); // Evita el envío del formulario
        return;
    }

    
});
