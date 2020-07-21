// Desenvolver um algoritmo  que utilize o conceito de espelhamento hash
let n1,n2,r

mdc = (n1,n2) => {
    while(r !== 0){
        r = n1 % n2
        n1 = n2
        n2 = r
        console.log(n1,n2)
    }
}
mdc(78,30)

//Dado uma matriz composta pelos números primos > 49 e < 100, os números devem ser preenchidos automaticamente
const primeNumber = []
vefiryNumber  = (num) => {
    var i = 2
    count = (i) => i+1
    if (num % i === 0) {
        console.log('O número ',num,' não é primo')
    } else {
        console.log('O número ',num,' é primo')
        primeNumber.push(num)
    }
    count(i)
}
InserePrimoMatriz = (startNumber, endNumber)  => {
    for(i = startNumber; i < endNumber; i++) {
        vefiryNumber(i)
    }
}
InserePrimoMatriz(49,100)

// Dado que o espelhamento tem o conceito de lista ligada: a) Para o primeiro calcular a média, para o último pegar o valor do quinto elemento
matriz = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
let fist = matriz[0]
average = () => {
    total = 0
    for (i=0; i < matriz.length; i++){
        total = total + matriz[i]
    }
    let average = Math.round(total/matriz.length)
    return average
}
matriz[0] = average()
console.log(matriz)