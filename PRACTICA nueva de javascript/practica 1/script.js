let numbers = [];

function addNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    numbers.push(parseInt(inputNumber));
    document.getElementById('inputNumber').value = '';
}

function findLargestNumber() {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    document.getElementById('result').innerHTML = `El número más grande es: ${largestNumber}`;
}
