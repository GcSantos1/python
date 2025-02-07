let dia = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];

let selecao = parseInt(prompt("Digite o numero da semana (1-7):"));

function nomeDoSemana(selacao){
if (selecao >= 1 && selecao <= 7) {
  alert(dia[selecao - 1]);
} else {
  alert("Número inválido! Digite um número entre 1 e 7.");
}
}


nomeDoSemana(selecao)
