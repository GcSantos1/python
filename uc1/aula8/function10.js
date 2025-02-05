function contarLetraA(texto){
    let contador = 0;
    for(let i=0; i<texto.length;i++){
        if(texto[i]=== "A" || texto[i]=== "a"){
            contador++
        }
    }
    return contador;
}

let palavra= prompt("Digite uma palavra: ");
alert(contarLetraA(palavra))