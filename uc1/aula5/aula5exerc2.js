let altura = parseFloat(prompt("digite sua altura"));
let peso = parseFloat(prompt("digite seu peso"));

let imc = peso / (algura ** 2);

if(isNaN(peso) || isNaN(altura)){
    document.write("Digite um valor valido")
}else{
    if(imc <18.5){
        document.write("baixo peso")
    }else if (imc <= 18.5 && imc <= 24.99){
    document.write("seu imc é normal " + imc.toFixed(2))
}else if(imc >=25 && imc <=29.99){
    document.write("seu imc é sobrepeso "+ imc.toFixed(2))
}else if (imc >= 30 && imc <= 34.99){
    document.write("seu imc é obesidade I "+ imc.toFixed(2))
}else if(imc >=35 && imc <= 39.99){
    document.write("seu imc é obesidade II "+ imc.toFixed(2))
}else{
    document.write("seu imc é obesidade III" + imc.toFixed(2))
}
}