

 function td3_exo2_1() {
    var _input = document.getElementById("input_exo2");
    var _output = document.getElementById("output_exo2");
    var _value = parseFloat(_input.value);
    _output.value = _value * _value;
    return false;
}


function td3_exo2_2() {
    var _input = document.getElementById("input_exo2");
    var _output = document.getElementById("output_exo2");
    var _value = parseFloat(_input.value);
    _output.value = _value * _value * _value;
    return false;
}



function creerFormulaire() {

    var body = document.querySelectorAll("body");

    var form = document.createElement("form");

    body[0].appendChild(form);

    var label = document.createElement("label");
    label.setAttribute("for", "saisie");
    var texte = document.createTextNode("Saisir une valeur : ");

    form.appendChild(label);
    label.appendChild(texte);
    
    var inputSaisi = document.createElement("input");
    inputSaisi.setAttribute("type", "text");
    inputSaisi.setAttribute("id", "saisie");
    inputSaisi.setAttribute("name", "saisie");
    inputSaisi.setAttribute("value", "0");
    
    form.appendChild(inputSaisi);

    var outputSaisi = document.createElement("input");
    outputSaisi.setAttribute("type", "text");
    outputSaisi.setAttribute("id", "output");
    outputSaisi.setAttribute("disabled", " true");
  
    form.appendChild(outputSaisi);

    var br = document.createElement("br");

    form.appendChild(br);

    var btnCarre = document.createElement("input");
    btnCarre.setAttribute("type", "Submit");
    btnCarre.setAttribute("value", "Carre");
    btnCarre.setAttribute("onClick", "return Carre()");

    form.appendChild(btnCarre);

    var btnCube = document.createElement("input");
    btnCube.setAttribute("type", "Submit");
    btnCube.setAttribute("value", "Cube");
    btnCube.setAttribute("onClick", "return Cube()");

    form.appendChild(btnCube);
}

function Carre() 
{
var _input = document.getElementById("saisie");
var _output =document.getElementById("output");
var _value = parseFloat(_input.value);
_output.value=_value*_value;
return false;
}

function Cube() 
{
var _input = document.getElementById("saisie");
var _output =document.getElementById("output");
var _value = parseFloat(_input.value);
_output.value=_value*_value*_value;
return false;
}

