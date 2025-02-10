
let alunos = []
    let notas = []
    let soma = 0

    for(let i=0;i<10;i++){
        let aluno = prompt("Digite seu nome")
        let nota = parseFloat(prompt("Digite sua nota"))

        alunos.push(aluno)
        notas.push(nota)
        soma+=nota
       
    }

    let media = soma/alunos.length

    document.write("A MÉDIA DOS ALUNOS FOI: " + media +"<br>")

    for(let i =0; i<10;i++){
        document.write("Aluno: " +alunos[i]+ " - Nota: " +notas[i] + "<br>")
    }