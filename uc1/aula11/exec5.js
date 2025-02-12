class Personagem{
    constructor(nome,energia,nivel){
    this.nome = nome;
    this.energia = energia;
    this.nivel = nivel;
    }
    
    ganharEnergia(hp){
        this.energia += hp
        document.write("Você ganhou "+hp+" de energia"+" sua energia atual é "+this.energia+"<br>")
    }
    perderEnergia(hp){
        this.energia -= hp
        document.write("Você perdeu "+hp+" de energia"+" sua energia atual é "+this.energia+"<br>")
    }

    subirNivel(xp){
        this.nivel += xp
        document.write("Agora seu nivel é "+this.nivel+"<br>")
    }

    exibirNivel(){
        document.write("Seu nivel atual é "+ this.nivel+"<br>")
    }

}

let champ = new Personagem ("GcSantos",100,10);

champ.ganharEnergia(50);
champ.perderEnergia(20);
champ.exibirNivel();
champ.subirNivel(2);
