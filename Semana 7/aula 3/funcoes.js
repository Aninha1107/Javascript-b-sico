/*
let numeros = [1,2,3,4];

let [a,...b]= numeros;

console.log(a);
console.log(b);
*/

let numeros = [1,2,3,4,5,6,7,8];

const soma= numeros.reduce(function(resultado, item){
    return resultado + item;
})

//console.log(soma);

const filtro = numeros.filter(item=>item>6);

const alunos = [
    {name:'João',nota:8},
    {name:'Ana',nota:10},
    {name:'Paulo',nota:5},
    {name:'Carlos',nota:6},
];




const aprovados = alunos.filter(aluno=>aluno.nota>=7);
console.log(aprovados);