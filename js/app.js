// Form - <form>
const libroForm = document.querySelector('#libroForm');
// Lista - <ul>
const listaLibros = document.querySelector('#listaLibros');
// Botón - <button>
const btnRegistrar = document.querySelector('#btnRegistrar');
// Inputs - <input>
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');
const anio = document.querySelector('#anio');

// Evento OnClick
btnRegistrar.onclick = function() {
    const nuevoLibro = document.createElement('li');
    nuevoLibro.textContent = titulo.value + ' de ' + autor.value + ' (' + anio.value + ')';
    listaLibros.appendChild(nuevoLibro);
    libroForm.reset();
}
