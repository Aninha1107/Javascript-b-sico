/*
let lista = ['frango','carne','peixe','maçã','aveia','laranja','melância'];

lista.forEach(minhafunção);

function minhafunção(item){
    console.log(item);
}

function modifiaLista(...vogais){
    console.log(vogais);
}

modifiaLista('a','e','i','o','u');

let comidas = [...lista, 'suco','uva'];
console.log(comidas);
*/

let numeros = [3,4,5,6,7];

let copia = numeros.map(item=>item*2);

console.log(numeros);

console.log(copia);
