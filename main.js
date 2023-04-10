$(document).ready(function(){
    
    const usuario = 'https://api.github.com/users/rssantos07';
    
    $.ajax(usuario).done(function(resposta){
        const name = resposta.name;
        const login = resposta.login;
        const repositorios = resposta.public_repos;
        const seguidores = resposta.followers;
        const seguindo =resposta.following;
        const avatar = resposta.avatar_url;
        const link = resposta.html_url;
        

         $('#name').text(name);
         $('#avatar').attr('src', avatar);
         $('#username').text(`@${login}`);
         $('#repos').text(repositorios);
         $('#seguidores').text(seguidores);
         $('#seguindo').text(seguindo);
         $('#link').attr('href', link);
    })

    

    
})
