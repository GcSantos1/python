
function exibirDados(){

    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('movel').value;
    let email = document.getElementById('email').value;

    document.write('<h2>Dados Recebidos:</h2>');
    document.write('<p><Strong>Nome:</Strong>' + nome+ '</p>');
    document.write('<p><Strong>Telefone:</Strong>' + tel+ '</p>');
    document.write('<p><Strong>Email:</Strong>' + email+ '</p>');
}