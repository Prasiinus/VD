function creerFormulaire ()
{
    var myForm = document.getElementById("monFormulaire");

    var labelNom = document.createElement("label");
    labelNom.setAttribute("for", "nom");
    labelNom.innerText = "Nom :";
    labelNom.style.marginRight="1%";
    
    myForm.appendChild(labelNom);

    var nom = document.createElement("input");
    nom.setAttribute("type", "text");
    nom.setAttribute("id", "nom");
    nom.setAttribute("name", "nom");
  
    myForm.appendChild(nom);

    var spanNom = document.createElement("span");
    spanNom.setAttribute("id","spanNom");

    myForm.appendChild(spanNom);


    var div = document.createElement("div");
    div.style.marginTop = "1%";

    myForm.appendChild(div);

    var btnValider = document.createElement("input");
    btnValider.setAttribute("type", "submit");
    btnValider.setAttribute("value", "Envoyer");

    div.appendChild(btnValider);

    var btnAnnuler = document.createElement("input");
    btnAnnuler.setAttribute("type", "submit");
    btnAnnuler.setAttribute("value", "Envoyer");

    div.appendChild(btnAnnuler);


    var labelId = document.createElement("label");
    labelId.setAttribute("for", "id");
    labelId.innerText = "Id :";
    labelId.style.marginRight="1%";
    
    
    var identifiant = document.createElement("input");
    identifiant.setAttribute("type", "text");
    identifiant.setAttribute("id", "ide");
    identifiant.setAttribute("name", "ide");
  
    myForm.insertBefore(identifiant, labelNom);
    myForm.insertBefore(labelId, identifiant);

}

function validerFormulaire()
{
    var inputNom = document.querySelector("#nom");
    var span = document.querySelector("#spanNom");

    if(inputNom.value == "")
    {
       
        span.innerHTML = "<b> le champ nom ne peut être vide !</b>";
        span.style.color ="red";
        return false;
    }
    else
    {
        alert("Vous avez saisi le nom : " + inputNom.value);
        return true;
    }
}