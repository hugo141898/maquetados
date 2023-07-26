function obtenerData() {
    const data = localStorage.getItem("data2");
    return JSON.parse(data);
  }
  
  function mostrarLista() {
    const lista = document.getElementById("eventos-dato");
    const data = obtenerData() || [];
    lista.innerHTML = "";
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name;
      lista.appendChild(li);
    });
  }
  
  // Mostrar la lista al cargar la página
  mostrarLista();
  