let numeros =[]

numeros.push(parseInt(prompt("Digite um numero para armazenar")))
numeros.push(parseInt(prompt("Digite outro numero")))
numeros.push(parseInt(prompt("Digite mais um numero")))


console.log(Math.max(...numeros))

