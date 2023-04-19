let alunos = [
    { nome: 'Rodrigo', nota1: 10, nota2: 10, nota3: 10 },
    { nome: 'Ana', nota1: 8, nota2: 7, nota3: 8.5 },
    { nome: 'Pedro', nota1: 5, nota2: 6, nota3: 5 },
    { nome: 'Mariana', nota1: 7, nota2: 9, nota3: 6 },
    { nome: 'Lucas', nota1: 4, nota2: 2, nota3: 6 },
    { nome: 'Julia', nota1: 6, nota2: 7, nota3: 5 }
];
function mediaAlunos() {
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i].nome
        const mediaFinal = parseFloat((alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3) / 3).toFixed(2)
        if (mediaFinal < 6) {
            console.log(`Aluno: ${aluno} Reprovado com media: ${mediaFinal}`)
        } else {
            console.log(`Aluno: ${aluno} Aprovado com media: ${mediaFinal}`)
        }
    }
}
mediaAlunos()

class Alunos {
    constructor(nome, nota1, nota2, nota3){
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    }
    classemedia(){
        const somaNotas = ((this.nota1 + this.nota2 + this.nota3)/3)
        if (somaNotas<6){
        return console.log(`Media do aluno ${this.nome} é: ${somaNotas} ele está Reprovado`);
    }else {
        console.log(`Media do aluno ${this.nome} é: ${somaNotas} ele está Aprovado`);
    }
    }
    
}

const aluno1 = new Alunos("'Rodrigo'", 10, 10, 10);
const aluno2 = new Alunos("Ana", 8,7,8.5);
const aluno3 = new Alunos("Pedro", 5, 6, 5);
const aluno4 = new Alunos("Mariana", 4, 2, 6);
const aluno5 = new Alunos("Lucas", 6, 7, 5);



aluno1.classemedia();
aluno2.classemedia();
aluno3.classemedia();
aluno4.classemedia();
aluno5.classemedia();





