function enviarMensaje() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        // Aquí puedes agregar lógica para enviar el mensaje a tu backend o procesarlo de alguna manera
        var respuesta = `¡Mensaje enviado con éxito! 
                        Nombre: ${nombre}
                        Correo electrónico: ${email}
                        Mensaje: ${mensaje}`;
        document.getElementById('respuesta').innerHTML = respuesta;
    } else {
        document.getElementById('respuesta').innerHTML = 'Por favor, completa todos los campos.';
    }
}
