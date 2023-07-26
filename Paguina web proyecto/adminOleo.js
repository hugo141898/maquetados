/*ACUARELA*/

// Obtener referencia a los elementos del DOM
const nameInput = document.getElementById("name");
const addButton = document.getElementById("addButton");
const updateButton = document.getElementById("updateButton");
const lista = document.getElementById("lista");

let editId = null;

// Manejar el evento clic del botón "Agregar"
addButton.addEventListener("click", agregar);

// Manejar el evento clic del botón "Actualizar"
updateButton.addEventListener("click", actualizar);

// Función para agregar un elemento a la lista
function agregar() {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  const data = obtenerData() || [];
  data.push({ id: Date.now(), name });
  guardarData(data);
  mostrarLista();
  nameInput.value = "";
}

// Función para actualizar un elemento de la lista
function actualizar() {
  if (!editId) return;

  const newName = nameInput.value.trim();

  if (newName === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  const data = obtenerData() || [];
  const updatedData = data.map(item => {
    if (item.id === editId) {
      return { id: editId, name: newName };
    }
    return item;
  });

  guardarData(updatedData);
  editId = null;
  addButton.style.display = "inline";
  updateButton.style.display = "none";
  nameInput.value = "";
  mostrarLista();
}

// Función para obtener los datos almacenados en el localStorage
function obtenerData() {
  const data = localStorage.getItem("dataOleo");
  return JSON.parse(data);
}

// Función para guardar los datos en el localStorage
function guardarData(data) {
  localStorage.setItem("dataOleo", JSON.stringify(data));
}

// Función para eliminar un elemento de la lista
function eliminar(id) {
  const data = obtenerData() || [];
  const newData = data.filter(item => item.id !== id);
  guardarData(newData);
  mostrarLista();
}

// Función para editar un elemento de la lista
function editar(id, name) {
  editId = id;
  addButton.style.display = "none";
  updateButton.style.display = "inline";
  nameInput.value = name;
}

// Función para mostrar la lista de elementos
function mostrarLista() {
  const data = obtenerData() || [];
  lista.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => editar(item.id, item.name));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => eliminar(item.id));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    lista.appendChild(li);
  });
}

// Mostrar la lista inicial al cargar la página
mostrarLista();

/**/
