function pedirCadenas() {
    var cadenas = [];
    var cadena;
  
    do {
      cadena = prompt("Ingrese una cadena de texto (o 'cancelar' para salir):");
      
      if (cadena !== null && cadena !== '') {
        cadenas.push(cadena);
      }
    } while (cadena !== null);
  
    var resultado = document.getElementById("resultado");
    resultado.innerText = cadenas.join(" - ");
  }
  