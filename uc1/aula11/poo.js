// criação de classe

class Moto{
    constructor(marca, modelo, cor){
        this.marca = marca;   //definição dos atributos
        this.modelo = modelo;
        this.cor = cor;
    }

    // método
    acelerar(){
        document.write("A moto "+this.modelo+ " está acelerando..."+"<br>")
    }
    frear(){
        document.write("A moto "+this.modelo+ " freeou ararrrrrrrrr"+"<br>")
    }
}

// cirando um objeto a partir da classe Moto

let minhaMoto = new Moto("Yamaha","Crosser 150","Vermelho")
minhaMoto.acelerar();
minhaMoto.frear();

let minhaOutraMoto = new Moto("Honda","XRE 300", "Cinza")
minhaOutraMoto.acelerar();
minhaOutraMoto.frear();