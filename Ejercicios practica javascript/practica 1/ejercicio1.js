var edad = parseInt(prompt("ingrese la edad: "));

const escritura = document.querySelector(".escritura");

if(edad >= 18) {
    escritura.textContent = "eres mayor, ya puedes conducir";
    escritura.style.color = "green";
    escritura.style.fontSize = "100px"
    escritura.style.fontWeight = "700";
} else {
    escritura.textContent = "eres menor, no puedes conducir";
    escritura.style.color = "red";
    escritura.style.fontSize = "100px"
    escritura.style.fontWeight = "700";
}