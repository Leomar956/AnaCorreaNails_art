function realizarReserva() {
    var nombre = document.getElementById('nombre').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;

    if (nombre && fecha && hora) {
        var mensaje = `¡Reserva realizada con éxito! 
                        Nombre: ${nombre}
                        Fecha: ${fecha}
                        Hora: ${hora}`;
        document.getElementById('mensaje').innerHTML = mensaje;
    } else {
        document.getElementById('mensaje').innerHTML = 'Por favor, completa todos los campos.';
    }
}
