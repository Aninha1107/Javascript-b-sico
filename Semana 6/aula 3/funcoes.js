class Conta{
    constructor(){
        this.saldo = 0;
    }

    saque(valor){
        if(valor>this.saldo)
            console.log('saldo insuficiente!');
        else
            this.saldo = this.saldo -= valor;

    }

    depósito(valor){
         this.saldo+= valor;
    }
}

class ContaPoupança extends Conta{
    rendimento(taxa){
        this.saldo += this.saldo * (taxa)/100;
    }
}

class ContaCorrente extends Conta{
    manutenção(taxa){
        this.saldo -= this.saldo * (taxa)/100;
    }

}

let c1 = new ContaPoupança;

c1.depósito(1000);
c1.rendimento(10);
c1.saque(300);

console.log(c1);