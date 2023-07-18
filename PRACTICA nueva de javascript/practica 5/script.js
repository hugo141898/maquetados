function generarSecuenciaFibonacci() {

    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        alert('Por favor, ingresa un número válido.');
        return;
    }


    const secuencia = [0, 1];
    for (let i = 2; i <= numero; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }


    document.getElementById('resultado').textContent = secuencia.join(', ');
}
