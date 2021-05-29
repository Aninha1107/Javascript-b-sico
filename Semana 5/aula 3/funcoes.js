function efetuarPagamento(total){
    if(total<=saldo)
     return Promise.resolve("compra autorizada!");
    else
     return Promise.reject("transação interrompida. saldo insuficiente!");

}
let saldo= 100;
efetuarPagamento(60)
   .then(result => console.log("Promisse resolved: "+result))
   .catch(error => console.log("Promisse rejected: "+error));

   console.log("processando...");