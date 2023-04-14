function Animal(nome,idade){
    this.nome=nome;
    this.idade = idade;

}

function Cachorro (nome,idade,raca,latido) {
    this.raca = raca;
    this.latido = latido;
    

    Animal.call(this,nome,idade);
}

function Gato (nome,idade,raca,miado) {
    this.raca = raca;
    this.miado = miado
    

    Animal.call(this,nome,idade);
}

function Porco (nome,idade,raca, grunido) {
    this.raca = raca;
    this.grunido = grunido
    

    Animal.call(this,nome,idade);
}


const cachorro1 = new Cachorro('Rexx', 5, 'Puddle','auau');
const cachorro2 = new Cachorro('Max', 3, 'Bulldog', 'aua a aua');
const cachorro3 = new Cachorro('Luna', 1, 'Golden Retriever', 'auuuuuuu');

const gato1 = new Gato('Garfield', 3, 'Siamês', 'miauuurrr');
const gato2 = new Gato('Frajola', 4, 'Angorá', 'ron-ron' );
const gato3 = new Gato('Tom', 2, 'Sphynx',  'miaaaau');

const porco1 = new Porco('Piggy', 1, 'Yorkshire','oinc oinc');
const porco2 = new Porco('Porky', 3, 'Berkshire','oinc oinc');
const porco3 = new Porco('Babe', 2, 'Tamworth','oinc oinc');

console.log(`${cachorro1.nome} que tem  ${cachorro1.idade} anos da raça ${cachorro1.raca} faz ${cachorro1.latido}`);
console.log(`${gato2.nome} que tem  ${gato2.idade} anos da raça ${gato2.raca} faz ${gato2.miado}`);
console.log(`${porco3.nome} que tem  ${porco3.idade} anos da raça ${porco3.raca} faz ${porco3.grunido}`);



