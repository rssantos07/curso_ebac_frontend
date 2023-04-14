function Animal(nome,idade){
    this.nome=nome;
    this.idade = idade;

}

function Cachorro (nome,idade,raca) {
    this.raca = raca;
    this.latido = function latir() {
        const latido = 'auau';
        return latido
    }

    Animal.call(this,nome,idade);
}

function Gato (nome,idade,raca) {
    this.raca = raca;
    this.miado = function miau() {
        const miado = 'miau';
        return miado
    }

    Animal.call(this,nome,idade);
}

function Porco (nome,idade,raca) {
    this.raca = raca;
    this.grunido = function latir() {
        const grunido = 'oinc oinc';
        return grunido
    }

    Animal.call(this,nome,idade);
}

function cachoroSom(){
    const cachorro = new Cachorro();
    console.log(`O ${cachorro.latido()}`);
}

function gatoSom(){
    const gato = new Gato();
    console.log(gato.miado());
}

function porcoSom(){
    const porco = new Porco();
    console.log(porco.grunido());
}

const cachorro1 = new Cachorro('Rexx', 5, "Puddle");
const cachorro2 = new Cachorro('Max', 3, 'Bulldog');
const cachorro3 = new Cachorro('Luna', 1, 'Golden Retriever');

const gato1 = new Gato('Garfield', 3, 'Siamês');
const gato2 = new Gato('Frajola', 4, 'Angorá');
const gato3 = new Gato('Tom', 2, 'Sphynx');

const porco1 = new Porco('Piggy', 1, 'Yorkshire');
const porco2 = new Porco('Porky', 3, 'Berkshire');
const porco3 = new Porco('Babe', 2, 'Tamworth');

console.log(`${cachorro1.nome} que tem  ${cachorro1.idade} anos da raça ${cachorro1.raca} faz ${cachorro1.latido()}`);
console.log(`${gato2.nome} que tem  ${gato2.idade} anos da raça ${gato2.raca} faz ${gato2.miado()}`);
console.log(`${porco3.nome} que tem  ${porco3.idade} anos da raça ${porco3.raca} faz ${porco3.grunido()}`);



