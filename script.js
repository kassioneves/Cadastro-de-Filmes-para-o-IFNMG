var titulo = document.getElementById('titulo').value;
var diretor = document.getElementById('diretor').value;
var ano = Number(document.getElementById('ano').value);
var lista = document.getElementById('lista');

function inserirDados(){
    if(titulo = ""){
        window.alert("Insira o título do filme.")
    }
    else{
         if(diretor = ""){
        window.alert("Insira o nome do diretor.")
    }
    else{
        if(ano = ""){
        window.alert("Insira o ano do filme.")
    }
}
} 
}