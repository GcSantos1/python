let mes = ["janeiro", "fevereiro", "março", "abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "outubro", "Novembro", "Dezembro"];

let selecao = parseInt(prompt("Digite o numero do mes (1-12):"));

function nomeDoMes(selacao){
if (selecao >= 1 && selecao <= 12) {
  alert(mes[selecao - 1]);
} else {
  alert("Número inválido! Digite um número entre 1 e 12.");
}
}


nomeDoMes(selecao)
