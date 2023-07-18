function checkPalindrome() {
    const inputWord = document.getElementById('inputWord').value.toLowerCase().replace(/\s/g, '');
    const reversedWord = inputWord.split('').reverse().join('');

    const resultElement = document.getElementById('result');
    if (inputWord === reversedWord) {
        resultElement.textContent = `${inputWord} es un palíndromo.`;
    } else {
        resultElement.textContent = `${inputWord} no es un palíndromo.`;
    }
}
