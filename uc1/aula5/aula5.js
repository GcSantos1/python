// lados do triangulo
let lado1 = prompt("Digite o primeiro lado");
let lado2 = prompt("Digite o segundo lado");
let lado3 = prompt("Digite o terceiro lado");
// testar se valores são nulos
if (lado1.trim() === "" || lado2.trim() === "" || lado3.trim() === "") {
    alert("Informe valores válidos");
} else if (
    (parseInt(lado1) + parseInt(lado2) < parseInt(lado3)) ||
    (parseInt(lado1) + parseInt(lado3) < parseInt(lado2)) ||
    (parseInt(lado2) + parseInt(lado3) < parseInt(lado1))
) {
    alert("Os valores não podem formar um triângulo");
} else {
    // testar qual é o tipo de triângulo
    if (parseInt(lado1) == parseInt(lado2) && parseInt(lado2) == parseInt(lado3)){
        document.write("Triângulo Equilátero")
    } else if (parseInt(lado1) == parseInt(lado2) || parseInt(lado2) == parseInt(lado3) || parseInt(lado1) == parseInt(lado3)){
        document.write("Triângulo Isósceles")
    } else {
        document.write("Triângulo Escaleno")
    }
}


