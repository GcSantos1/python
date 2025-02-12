class Produto{
    constructor(nome,preco,quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantide = quantidade;
    }
    exiba(){
        document.write("o produto é "+this.nome+ " seu preço "+this.preco+ " e a quantidade é  "+ this.quantide);
    }
}

let product = new Produto ("Café",99.99,50);
product.exiba();