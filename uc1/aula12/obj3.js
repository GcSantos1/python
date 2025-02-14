class Televisao{
    constructor(canalAtual,volume){
        this.canalAtual = canalAtual;
        this.volume = volume;
    }

    aumentarVolume(){
        console.log("O volume atual "+ this.volume)
        
        if(this.volume >= 100){
            console.log("Volume maximo")   
        }else{
            this.volume++
            console.log("o volume é "+ this.volume);
        }
    }
    diminuirVolume(){
        console.log("O volume atual "+ this.volume)
        if(this.volume <= 0){
            console.log("Volume minimo")   
        }else{
            this.volume--
            console.log("o volume é "+ this.volume);
        }
    }

    mudarDeCanal(canal){
        this.canalAtual = canal;
        return canal;
    }

}

let tv = new Televisao(1,50)

tv.aumentarVolume();
tv.diminuirVolume();
tv.diminuirVolume();

console.log(tv)
tv.mudarDeCanal(2);
console.log(tv)
