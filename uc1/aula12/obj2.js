class Aluno{
    constructor(nome,idade,notas){
    this.nome = nome;
    this.idade = idade;
    this.notas = notas;
   
}



media(){
    let media=0
    this.notas.forEach(nota=> {
        media +=nota
    
    });
    media = media/this.notas.length 

    document.write("O aluno "+this.nome+"que tem a idade "+this.idade+"tem a media das notas de "+media+"<br>") 
}

}

let student = new Aluno("Gabriel",27, [10,8])


student.media()