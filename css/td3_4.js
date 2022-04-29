
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var nMystere = getRandomInt(100);
var compteur = 0;
var tabHist=[];

function trouverNombre() {
    
    
    var span = document.getElementById("commentaire");
    var essai = document.getElementById("input");
    var spanHist = document.getElementById("spanHist");

    essai = parseInt(essai.value);
    console.log(essai);
    tabHist.push(essai);

    if (essai<nMystere) 
    {
        span.innerText = "Vous êtes en dessous !";
        span.style.color = "red";
        compteur ++;
        spanHist.innerText = "Historique des valeurs d'entrées : " + tabHist;
        return false;
    }

    else if (essai>nMystere)
    {
        span.innerText = "Vous êtes au dessus !";
        span.style.color = "blue";
        compteur ++;
        spanHist.innerText = "Historique des valeurs d'entrées : " + tabHist;
        return false;
    }

    if (essai==nMystere)
    {
        alert("BRAVO vous avez trouvé le chiffre mystere " + nMystere + " en " + compteur + " essaie(s)");
        
        compteur ++;
        spanHist.innerText = "Historique des valeurs d'entrées : " + tabHist;
        
    }
   

}