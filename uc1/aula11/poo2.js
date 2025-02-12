// exemplo com encapsulamento

class ContaBancaria{
    #saldo; //atributo privado

    constructor(titular,saldo){
        this.titular = titular;
        this.#saldo = saldo;
    }
    depositar(valor){
        this.#saldo += valor;
        document.write("Deposito de R$ "+valor+" realizdo"+"<br>");
        
    }
    consultarSaldo(){
        document.write("Saldo do titular "+this.titular+ " | R$ "+this.#saldo+"<br>");
    }
    sacar(valor){
        if(valor > this.#saldo){
            document.write("Saldo insuficiente para o titular "+this.titular+"<br>")
        }else{
            this.#saldo -= valor;
            document.write("Saldo após o saque de: R$ " +valor+" |R$"+this.#saldo+"<br>");
        }
    }
    transferir(valor, destinatario){
        if(valor > this.#saldo){
            document.write("Saldo insuficiente para o titular "+this.titular+"<br>")
        }else{
            this.#saldo -=valor;
            destinatario.#saldo += valor;
            document.write("Você transferiu R$ " + valor+ " para o titular: "+destinatario.titular+"<br>");
        }
    }
}

//criando uma nova conta

let cliente1 = new ContaBancaria("Davi", 1000);
let cliente2 = new ContaBancaria("Carlos",500);
cliente1.consultarSaldo();
cliente2.consultarSaldo();

cliente1.transferir(200,cliente2);
cliente1.consultarSaldo();
cliente2.consultarSaldo()
cliente1.depositar(150);
cliente1.consultarSaldo();
cliente2.sacar(500);
cliente2.consultarSaldo();
