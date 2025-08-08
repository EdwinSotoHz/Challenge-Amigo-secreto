// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor ingresa un nombre válido');
        return;
    }
    
    amigos.push(nombre);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <li class="result-item">El amigo secreto es: <strong>${ganador}</strong></li>
    `;
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        const elementoAmigo = document.createElement('li');
        elementoAmigo.classList.add('name-item');
        elementoAmigo.textContent = amigo;
        listaAmigos.appendChild(elementoAmigo);
    });
}