let cidades = [];
let nome =[];


for(let i = 0; i<4;i++){
    cidades.push(prompt("Qual sua cidade? "+(i+1)+":"));
    nome.push(prompt("Qual o nome da pessoa? "+(i+1)+":"));
}

let indice;
let continua;

while(true){
    indice = prompt("Informe o índice");
    if(indice >=0 && indice<4){
    alert("Nome "+nome[indice]+" Cidade " + cidades[indice]);}
    else{
        alert("índice inválido  ")
    }
    continua = prompt("deseja ler outro índice? <s/n>").toLocaleLowerCase();
    if(continua != "s") break;
}

// document.write(nome[1]);
// document.write(cidades[1]);
