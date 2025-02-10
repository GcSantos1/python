let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz)
console.log(matriz[0][1])
console.log(matriz[2][2])

//Modificando um valor

matriz[1][1] = 99

console.log(matriz)

//percorrer a matriz

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        document.write(matriz[i][j])
    }
    document.write("<br>")
}