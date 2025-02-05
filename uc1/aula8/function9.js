let n = parseInt(prompt("Digite um numero"))

function verificarNumero (n){
    if(n > 0){
        alert("Positivo")
    }else if(n < 0 ){
        alert("Negativo")
    }else{
        alert("zero")
    }
}

verificarNumero(n)