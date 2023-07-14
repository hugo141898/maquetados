function calcularLetraDNI() {
    var numero;
    var letra;
  
    do {
      numero = prompt("Ingrese el número de DNI:");
      
      if (numero !== null && numero !== '') {
        if (!isNaN(numero)) {
          numero = parseInt(numero, 10);
          if (numero >= 0 && numero <= 99999999) {
            letra = calcularLetra(numero);
            alert("La letra del DNI " + numero + " es: " + letra);
          } else {
            alert("El número de DNI debe estar entre 0 y 99999999.");
          }
        } else {
          alert("Debe ingresar un número válido.");
        }
      }
    } while (numero !== null);
  }
  
  function calcularLetra(numero) {
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var resto = numero % 23;
    return letras.charAt(resto);
  }
  