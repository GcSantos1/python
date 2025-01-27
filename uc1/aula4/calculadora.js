let numero1 = 3
let numero2 = 3
let operacao = "-"

let soma = numero1 + numero2
let subtração = numero1 - numero2   
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2



switch(operacao){
    case "+":
    console.log(soma)
    break

    case "-":
    console.log(subtração)
    break

    case "*":
    console.log(multiplicacao)
    break

    case "/":
    console.log(divisao)
    break

    default: 
    console.log("Operação invalida ")
}