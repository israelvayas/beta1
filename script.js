const database = firebase.database();
const chatRef = database.ref('chat');

const formularioChat = document.getElementById('formularioChat');
const mensajeInput = document.getElementById('mensajeInput');
const mensajes = document.getElementById('mensajes');

// Escuchar mensajes nuevos
chatRef.on('child_added', function(snapshot) {
    const mensaje = snapshot.val();
    const item = document.createElement('li');
    item.textContent = mensaje;
    mensajes.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// Enviar nuevo mensaje
formularioChat.addEventListener('submit', function(e) {
    e.preventDefault();
    if (mensajeInput.value) {
        // Guardar el mensaje en la base de datos
        chatRef.push(mensajeInput.value);
        mensajeInput.value = ''; // Limpiar el campo de entrada
    }
});
