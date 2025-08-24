const area =  document.getElementById ("moneta")
const lancia = document.getElementById ("bottone");
const moneta = ["Testa" , "Croce"]
x = 1
lancia.addEventListener ("click" , function () {
    x = Math.random(moneta) * moneta.length
    if (x === "Testa") {
        area.innerHTML = "Testa"
        console.log("TESTA")
    } else if (x === "Croce") {
        area.innerHTML = "Croce"
        console.log("CROCE")
    }
})