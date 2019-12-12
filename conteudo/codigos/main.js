function Apagar(){
    
}

function mudarFundo(CaminhoImage){
    console.log("Mudou?");
    document.getElementById('corpo').style.backgroundImage = 'url(' + CaminhoImage + ')';
}

function PegarDados(){
    var url = 'https://api.spotify.com/v1/artists/3RNrq3jvMZxD9ZyoOZbQOD';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    return xhttp.responseText;
}