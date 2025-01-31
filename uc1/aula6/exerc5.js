let nome, cadastro = "";

let i = 0;
x = prompt("quantas vezes deseja repetir?");
while(i < x){
    
    nome = prompt("informe o nome");
    cadastro += nome + "<br>";
    i++;
}

document.write(cadastro);
document.write("Foram lidos " +i+ " nomes");