class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    exiba(){
        document.write("O livro é "+ this.titulo+" do autor "+this.autor+" feito no ano de "+this.ano+"<br>")
    }
}

let book = new Livro("Assim Falou Zaratustra","Friedrich Nietzsche",1885)

book.exiba()