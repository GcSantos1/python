class Retangulo{
    constructor(altura,largura){
        this.altura=altura
        this.largura=largura

    }
    calculo(){
        let total = this.altura*this.largura
        console.log("o total é " + total)
    }
}

let ret= new Retangulo (10,8)

ret.calculo();
