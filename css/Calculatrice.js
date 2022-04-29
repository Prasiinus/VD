var choix = 0;
var nombre1 = "";
var nombre2 = "";

function btnChiffre(x) {
    var _input = document.getElementById("input");
    let _chiffre = x;
    console.log(_chiffre);
    nombre1 += x;
    console.log(nombre1);
    _input.value = nombre1;



};

function btnPlus() {


    let _input = document.getElementById("input");
    _input.value = "";
    btnEgal();
    nombre1 = "";
    choix = 1;
};

function btnMinus() {
    let _input = document.getElementById("input");
    _input.value = "";
    btnEgal();
    nombre1 = "";
    choix = 2;
};

function btnMulti() {
    let _input = document.getElementById("input");
    _input.value = "";
    btnEgal();
    nombre1 = "";
    choix = 3;
}

function btnDivi() {
    let _input = document.getElementById("input");
    _input.value = "";
    btnEgal();
    nombre1 = "";
    choix = 4;
}

function btnEgal() {
    let _output = document.getElementById("output");
    switch (choix) {
        case 0:
            nombre2 = nombre1;
            console.log(nombre2);
            _output.value = nombre2;
            break;
        case 1:
            console.log(nombre2);
            nombre2 = parseInt(nombre2) + parseInt(nombre1);
            console.log(nombre2);
            _output.value = nombre2;
            break;
        case 2:
            nombre2 = parseInt(nombre2) - parseInt(nombre1);
            _output.value = nombre2;
            break;
        case 3:
            nombre2 = parseInt(nombre2) * parseInt(nombre1);
            _output.value = nombre2;
            break;
        case 4:
            if(nombre1 == "0"){
                alert("Division par zéro !");
            } else {
                nombre2 = parseInt(nombre2) / parseInt(nombre1);
                _output.value = nombre1;
            }
            break;
        default:
            break;
    }
}

function btnSup (){}

function btnReset() {
    document.getElementById("output").value = "";
    document.getElementById("input").value = "";
    nombre1="";
    nombre2="";

}


function btnComma(table) {
    if (table.input.length == 0) {
        table.input.value = ",";
    }

    else {
        var c = 0;
        for (var i = 0; i < table.input.length; i++) {
            if (table.input.value.charAt(i) == ",") {
                c = 1
                break;
            }
        }
        if (c == 0) {
            table.input.value += ","
        }
        else {
            alert("Un nombre ne peut avoir qu'une virgule.")
        }
    }
};