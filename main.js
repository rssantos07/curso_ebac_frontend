const form = document.getElementById('formulario');

form.addEventListener('submit',function (e){
    
    e.preventDefault();
    
    let valorA = parseInt(document.getElementById('valor-a').value);
    let valorB = parseInt(document.getElementById('valor-b').value);
    const valido = `Esse Formulário <b>É</b> Válido`
    const naoValido = `Esse formulário <b>Não</b> é Válido`

    

    if (valorB>valorA){
        const containerMensagem =document.querySelector('.message');
        containerMensagem.innerHTML = valido;
        document.querySelector('.message').style.display = 'block';
        document.querySelector('.error-message').style.display= 'none'

    }else{
        const containerMensagem =document.querySelector('.error-message');
        containerMensagem.innerHTML = naoValido;
        document.querySelector('.error-message').style.display= 'block'
        document.querySelector('.message').style.display = 'none';
        
    }
})

