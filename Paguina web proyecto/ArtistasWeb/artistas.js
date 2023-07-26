function obtenerData() {
    const data = localStorage.getItem("data1");
    return JSON.parse(data);
  }
  
  function mostrarLista() {
    const lista = document.getElementById("artistas-dato");
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
  

  