function obtenerData() {
    const data = localStorage.getItem("dataCarboncillo");
    return JSON.parse(data);
  }
  
  function mostrarLista() {
    const lista = document.getElementById("producto-de-venta-Carboncillo");
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
  