let oceano = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

let linha  = Math.floor(Math.random()*5);
let coluna = Math.floor(Math.random()*5);
oceano[linha][coluna] = 1;

let vida = 5;
while (vida > 0) {
    let linha = parseInt(prompt("Informe a linha (0 a 4): "));
    let coluna = parseInt(prompt("Informe a coluna (0 a 4): "));
    if (oceano[linha][coluna] === 1) {
        alert("Parabéns, você acerto")
        break;
    } else {
        vida --;
        if (vida == 0) {
            alert("Game over");
            break;
        }
        alert("Você errou!! - Faltam "+vida+" vidas")
    }  
   
}