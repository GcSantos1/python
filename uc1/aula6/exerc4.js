const numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Informe o numero"));
    numeros.push(numero); 
    soma += numero; 
}
document.write("Soma dos números: " + soma);
