const notas = document.querySelector(".nota");

var nota = parseInt(prompt("Ingresa tu nota"));



if(nota === 0 || nota === 1 || nota === 2 || nota === 3) {
    notas.textContent = "Muy deficiente"
    notas.style.color = "red";
    notas.style.fontSize = "100px";
    notas.style.fontWeight = "700";
} else
{
    if(nota === 4 || nota === 5) {
        notas.textContent = "Insuficiente";
        notas.style.color = "red";
        notas.style.fontSize = "100px";
        notas.style.fontWeight = "700";
    } else {
        if(nota === 6) {
            notas.textContent = "Suficiente";
            notas.style.color = "red";
            notas.style.fontSize = "100px";
            notas.style.fontWeight = "700";
        } else {
            if(nota === 7) {
                notas.textContent = "Bien";
                notas.style.color = "yellow";
                notas.style.fontSize = "100px";
                notas.style.fontWeight = "700";
            } else {
                if(nota === 8 || nota === 9) {
                    notas.textContent = "Bien";
                    notas.style.color = "yellow";
                    notas.style.fontSize = "100px";
                    notas.style.fontWeight = "700";
                } else {
                    if(nota === 10) {
                        notas.textContent = "Sobresaliente";
                        notas.style.color = "green";
                        notas.style.fontSize = "100px";
                        notas.style.fontWeight = "700";
                    }
                }
            }
        }
    }
}