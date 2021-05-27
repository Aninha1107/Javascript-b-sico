/*
Programa javascipt que demonstra funções
*/


const painel= document.getElementById('painel');
let texto= ''
let numero1=30, numero2=10;

//função com parâmetros e com retorno
function soma(variavel1,variavel2){
    return variavel1+variavel2;
}
//função sem parâmetro e sem retorno

function endereço(){
    return"av. beira mar 212";
}
//função sem parâmetro e sem retorno

function olamundo(){
    console.log("olá mundo!")
}
olamundo();
texto= endereço();

const resultado= document.createTextNode(texto);
painel.appendChild(resultado);