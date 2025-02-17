class Carro{
    constructor(marca,modelo,velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    acelerar(){
        this.velocidade += 10
    }

    velocimetro(){
        document.write("A velocidade do carro é "+this.velocidade+"<br>")
    }

}

let car = new Carro("Toyota","Hilux",80);

car.velocimetro();
car.acelerar();
car.velocimetro();