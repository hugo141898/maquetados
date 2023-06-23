const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const generateButton = document.getElementById('generateButton');
const namesContainer = document.getElementById('namesContainer');

const nombresAleatorios = [
  'Luis',
  'Ana',
  'Carlos',
  'María',
  'Roberto',
  'Fernando',
  'Carla',
  'Evelin',
  'Pedro'
];

function generarNombreAleatorio() {
  const nombreAleatorio = nombresAleatorios[Math.floor(Math.random() * nombresAleatorios.length)];
  return nombreAleatorio;
}

function generarNombre() {
  const nombre = generarNombreAleatorio();
  nameInput.value = nombre;
}

function explotarBoton() {
  generateButton.classList.add('explode');
  generateButton.disabled = true;

  setTimeout(() => {
    generateButton.classList.remove('explode');
    generateButton.disabled = false;
    generarNombre();
  }, 1000);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  generarNombre();
});

generateButton.addEventListener('click', explotarBoton);

generarNombre();
