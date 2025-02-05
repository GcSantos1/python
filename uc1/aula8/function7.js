let num1 = parseInt(prompt("digite um numero"))
let num2 = parseInt(prompt("Digite outro numero"))
let num3 = parseInt(prompt("Digite mais um numero"))

function mediaAluno(num1,num2,num3){
    let media = (num1+num2+num3)/3
    return media
}

alert(mediaAluno(num1,num2,num3))