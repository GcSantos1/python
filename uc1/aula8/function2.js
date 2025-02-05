function somar(a,b){
    let soma = a+b;
    return soma;
}

function subtrair(a,b){
    let subtraia = a-b;
    return subtraia;
}

function multiplicar(a,b){
    let multiplique = a*b;
    return multiplique;
}


function dividir(a,b){
    let divisao = a/b;
    return divisao;
}


let numero1 = parseInt(prompt("digite um numero"))
let numero2 = parseInt(prompt("Digite outro numero"))
let operacao = prompt("Escolha a operação matematica desejada. \n1.Somar \n2.Subtração \n3.Multiplicação \n4.Divisão")

if(operacao == 1){
    alert(somar(numero1, numero2))
}else if (operacao ==2){
    alert(subtrair(numero1,numero2))
}else if(operacao == 3){
    alert(multiplicar(numero1, numero2))
}else if(operacao == 4 ){
    alert(dividir(numero1, numero2))
}else{
    alert("Digite uma opção valída")
}