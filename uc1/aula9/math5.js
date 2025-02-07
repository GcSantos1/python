function naotenhosorte(n1, n2) {
    return Math.floor(Math.random() * (n1 - n2 + 1) + n2);
}
let min = parseInt(prompt("Menor número"))
let max = parseInt(prompt("Maior número"))

document.write("Não tenho sorte, mas o número deu: " + naotenhosorte(max,min))