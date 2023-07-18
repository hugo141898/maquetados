function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, ingrese valores válidos para el rango.");
        return;
    }

    if (min >= max) {
        alert("El valor mínimo debe ser menor que el valor máximo.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El número aleatorio en el rango de ${min} a ${max} es: ${randomNumber}`;
}
