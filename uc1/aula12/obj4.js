class Produto{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco  
    }

    desconto(){
        let promo = this.preco *0.9
        console.log("O produto é "+this.nome+" tem o preço de "+this.preco+" Com desconto de 10% fica "+promo)
    }
}

let product = new Produto("Pc",100)

product.desconto();