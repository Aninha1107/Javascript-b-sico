let lista = [];

lista[0]="leite";
lista[1]="carne";
lista[2]="frango";
lista[3]="porco";
lista[4]="maçã";



lista.push("uva"); //acrescenta no final
lista.pop();

lista.unshift("aveia"); //acrescenta no inicio
lista.shift();

lista.splice(4);
console.log(lista);

