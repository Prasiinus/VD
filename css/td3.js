console.log("Bonjour")

function bonjour() {
    alert("Hello world!");
}

function creerFormulaire() {
    var body = document.querySelectorAll("body");

    var form = document.createElement("form");

    body[0].appendChild(form);

    var inputNom = document.createElement("input");
    inputNom.setAttribute("type", "texte");
    inputNom.setAttribute("id", "nom");
    inputNom.setAttribute("name", "nom");
   // inputNom.setAttribute("onclick", "bonjour()");
    

    form.appendChild(inputNom);

    var br = document.createElement("br");

    form.appendChild(br);

    var btnValider = document.createElement("input");
    btnValider.setAttribute("type", "submit");
    btnValider.setAttribute("value", "Envoyer");
    btnValider.setAttribute("onsubmit", "return validerFormulaire();");

    form.appendChild(btnValider);

    var btnAnnuler = document.createElement("input");
    btnAnnuler.setAttribute("type", "reset");
    btnAnnuler.setAttribute("value", "Annuler");

    form.appendChild(btnAnnuler);
}

function validerFormulaire()
{
    if (inputNom == null)
    {
        return false;
    }
    else
    {
        alert("Envoyé!");
        return true;
    }

}
