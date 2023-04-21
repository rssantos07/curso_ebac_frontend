function multiplicacao(num1:number, num2:number):number{
return num1 * num2
}

const resultado = multiplicacao(6,6)

console.log(resultado)

function saudacao(nome: string){
    const comprimento: string = `ola `;
    return comprimento + nome
}

const ola = saudacao("Rodrigo")
console.log(ola)