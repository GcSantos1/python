let nome, cadastro = "";

let continua = "s";

let i = 0;

while(continua == "s"){
    nome = prompt("informe o nome");
    cadastro += nome + "<br>";
    i++;
    continua = prompt("Deseja continuar? <s/n>");
}

document.write(cadastro);
document.write("Foram lidos " +i+ " nomes");