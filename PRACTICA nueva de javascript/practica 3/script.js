function sumDigits() {
    const inputNumber = document.getElementById('inputNumber').value;
    const digits = inputNumber.toString().split('').map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr, 0);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `La suma de los dígitos de ${inputNumber} es: ${sum}`;
}
