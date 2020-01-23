
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

function AbirirMenu(){
    if (document.getElementsByClassName("MenuItem")[0].style.display == "block") {

        document.getElementsByClassName("MenuItem")[0].style.display = "none";
        document.getElementsByClassName("MenuItem")[1].style.display = "none";
        document.getElementsByClassName("MenuItem")[2].style.display = "none";
        document.getElementById("Menu").style.background = "transparent";
    }

    else {
        document.getElementsByClassName("MenuItem")[0].style.display = "block";
        document.getElementsByClassName("MenuItem")[1].style.display = "block";
        document.getElementsByClassName("MenuItem")[2].style.display = "block";
        document.getElementById("Menu").style.background = "aliceblue";
    }
    
}