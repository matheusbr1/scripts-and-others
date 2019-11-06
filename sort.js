var estados = ['Sao Paulo', 'Rio de Janeiro', 'Pará', 'Parana', 'Sergipe', 'Rio Grande do Sul', 'Santa Catarina', 'Rio Grande do Norte', 'Minas Gerais', 'Tocantins', 'Amapa', 'Amazonas'];

// ordenação
for (var i = 0; i < estados.length; i++) {
    for (var k = i; k > 0 && estados[k] < estados[k-1]; k--){
        var aux = estados[k-1];
        estados[k-1] = estados[k];
        estados[k] = aux;
    }
}

// exibe resultado
console.log("O vetor ordenado é: " + estados);