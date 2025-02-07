let frutas = ["Maça","Abacaxi","Acerola"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

if(frutas [3]== undefined){
    console.log("índice inválido")
}

// funções básicas
// push() >> acrescenta no final

console.log("Acrescentando com push")
frutas.push("abacate")
console.log(frutas)

console.log("Removendo com pop")
frutas.pop();
console.log(frutas)

// sort() >> ordena um array string

console.log("Ordenando o string do array")
frutas.sort();
console.log(frutas)

// copiar um um array: sinaxe : [...array_a_ser_copiado]

let copia = [...frutas]
console.log("Mostrando a cópia")
console.log(copia)

// length >> tamanho do array

console.log("Quantos elementos tem no array")
console.log(frutas.length);

// como trazer a função Math.random para exibir um elemento aleatório

let indiceAleatorio = Math.floor(Math.random()*frutas.length)
console.log(frutas[indiceAleatorio])