let valor1 = 3
let valor2 = 6
let valor3 = 5

/*if(valor1 > valor2){
 console.log(valor1 + " Valor 1 é Maior que o Valor 2")
}else{
    console.log(valor2 + " Valor 2 é Maior que o valor 1")
} */


if(valor1 >= valor2){
    if(valor1 >=valor3){
        console.log("o valor maior é "+ valor1)
    }
    if(valor2 >= valor1){
        if(valor2 >=valor3){
            console.log("o valor maior é "+ valor2)
        }
    }
    if(valor3 >= valor2){
        if(valor3 >=valor1){
            console.log("o valor maior é "+ valor3)
        }
    }
}
