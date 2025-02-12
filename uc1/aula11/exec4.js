class Filme{
    constructor(titulo,diretor,ano){
    this.titulo = titulo;
    this.diretor = diretor;
    this.ano = ano;
    }
    exiba(){
        document.write("O filme é  "+this.titulo+ " seu diretor é  "+this.diretor+ " e o ano de lançamento é "+ this.ano);
    }
}

let film = new Filme ("Batman o cavaleiro das trevas ","Christopher Nolan",2008);
film.exiba();