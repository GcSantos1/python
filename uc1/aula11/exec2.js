class Pessoa{
    constructor(nome,idade,profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    }
    exiba(){
        document.write("o nome da pessoa é "+this.nome+ " a sua idade é "+this.idade+ " e sua profissão é "+ this.profissao);
    }
}

let people = new Pessoa ("Gabriel",27,"Motoboy");
people.exiba();