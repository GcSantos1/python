class Produto{
    constructor(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    }

    exiba(){
        document.write("o produto é "+this.nome+ " seu preço "+this.preco+ " e a quantidade é  "+ this.estoque+"<br>");
    }

    vender(quantidade){
        if(quantidade > this.estoque){
            document.write("Quantidade no estoque insuficiente")
        }else{
            this.estoque-=quantidade;
            document.write("Você diminuiu o valor em "+quantidade+ " a quantidade atual é "+this.estoque+"<br>")
        }
    }
    aumentar(quantidade){
        this.estoque += quantidade;
        document.write("Você aumentou a quantidade em "+quantidade+" a quantidade atual é "+this.estoque+"<br>")
    }

}

let product = new Produto ("Café",99.99,50);
product.exiba();
product.vender(20);
product.aumentar(10)