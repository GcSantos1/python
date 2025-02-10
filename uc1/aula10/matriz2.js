 let matriz = [
    [9.9, 7.2, 8.8],
    [5.5, 7.7, 5.2],
    [6.6, 5.4, 8.1]
];

for(let i = 0; i<matriz.length;i++){
    document.write(matriz[i].join(" | ")+ "<br>")
}


document.write("media dos alunos"+ "<br>")
for(let i=0; i < matriz.length;i++){
    let soma = 0;
    for(let j = 0 ; j<matriz.length;j++){
        soma += matriz[i][j]
    }
    let media = soma/ matriz[i].length;

    document.write("Aluno "+(i+1)+" Media: "+media.toFixed(1)+"<br>");
}

let maiorNota = matriz[0][0]
for(let i=0; i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        if(matriz[i][j]>maiorNota){
            maiorNota = matriz[i][j]
        }
    }
}
document.write("Maior nota: "+maiorNota)



for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 6) {
            matriz[i][j] = 6;
        }
    }
}

document.write("<br>"+matriz.join("|")+ "<br>")