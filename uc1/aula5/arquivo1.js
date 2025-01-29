// let nome = prompt("Digite o nome");
// alert("O nome é: " + nome);
// document.write("O nome é: " + nome);

let valor1 = prompt("Digite o primeiro valor ");
let valor2 = prompt("Digite o segundo valor");

if(valor1.trim() === "" || valor2.trim() === ""){
    alert("informe valores validos")
}else{

    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);
    let resultado = (num1+num2)

    alert("A soma dos valores é " + resultado)
    
    
    if(resultado <20 ){
        alert("o resultado é menor que 20")
    }else if(resultado >20){
        alert("o resultado é maior que 20")
    }else{
        alert("A soma é igual a 20")
    };

}

