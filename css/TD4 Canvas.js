var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//utilisation du clear
var x = 0;
var y = 0;
var dx = 50;

var inter =setInterval(dessinerRectangle, 100);

function dessinerRectangle()
{
    console.log("x : "+ x);
    ctx.beginPath();
    ctx.fillRect(x, y, 50, 50);
    ctx.closePath();
    x = x + dx;

    if(x > 200)
    {
        clearInterval(inter);
    }
}
// ex 1

ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = "green";
ctx.fillRect(200, 200, 150, 70);

ctx.strokeRect(200, 200, 150, 70)
ctx.closePath();

// ex 2
var c2 = document.getElementById("canvas2");
var ctx2 = c2.getContext("2d");

ctx2.beginPath();
ctx2.strokeStyle ="red"
ctx2.lineTo(75,  50);
ctx2.lineTo(125, 50);
ctx2.lineTo(150, 75);
ctx2.lineTo(125, 100);
ctx2.lineTo(75, 100);
ctx2.lineTo(50, 75);
ctx2.lineTo(75, 50);
ctx2.stroke();
ctx2.closePath();




// ex 3
var c3 = document.getElementById("canvas3");
var ctx3 = c3.getContext("2d");

ctx3.beginPath();
ctx3.arc(150, 150, 100, 0, Math.PI,false);
ctx3.stroke();
ctx3.closePath();

//ex 4

var c4 = document.getElementById("canvas4");
var ctx4 = c4.getContext("2d");
var presidents = new Image();
presidents.onload = function ()
{
    ctx4.drawImage(presidents, 0,0, c4.width, c4.height);

    ctx4.beginPath();
    ctx4.arc(145, 115, 50, 2 * Math.PI, false);
    ctx4.strokeStyle = "rgba(255,0,0,50)";
    ctx4.stroke();
    ctx4.closePath();

    ctx4.beginPath();
    ctx4.clearRect(300,140,100,100); //efface du canvas la zone dessinée
    ctx4.closePath();

}
presidents.src = "presidents.png"

// ex 5
var c5 = document.getElementById("canvas5");
var ctx5 = c5.getContext("2d");
var diapo = new Image();
diapo.onload =function()
{
    ctx5. drawImage(diapo, 0,0, c5.width, c5.height);
}

diapo.src = "diapo.jpg"

// voir correction

// exercice 6 





