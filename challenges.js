/*

1º EXERCÍCIO

Crie uma função que dado o objeto a seguir:
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
*/

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const showAdress = () => console.log(`
    O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}
`)

// console.log(showAdress())

/* 
2º EXERCÍCIO
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);
*/
function pares(x, y) {
    var pares = []
    while(x <= y){
        (x % 2 == 0) ? pares.push(x) : x
        x++
    }
    return console.log(pares)
}
// pares(0,10)

/* 3º EXERCÍCIO
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
*/

// Solução 1
function temHabilidade(array, element) {
    let HaveElement = false
    for (i=0; i <= skills.length; i++) {
        (array[i] === element ) ? HaveElement = true : HaveElement
    }
    return console.log(element, HaveElement)
}

// Solução 2
function temHabilidade(array, element) {
    let HaveElement
    (array.indexOf(element) !== -1) ? HaveElement = true : HaveElement = false
    return console.log(element, HaveElement)
}

var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills, 'Javascript'); // true ou false

/*
4º EXERCÍCIO
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
 */

function expertize(years) {
    var level = null
    if ( years === 0 || years === 1 ) { 
        level = 'Iniciante' 
    } 
    if ( years > 1 || years <= 4) {
        level = 'Intermediário' 
    }
    if ( years > 4 || years <= 7 ) { 
        level = 'Avançado' 
    } 
    if ( years > 7) { 
        level = 'Jedi Master' 
    }
    console.log(level) 
 }

 expertize(0)