var c = document.getElementById("monCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(50, 20);
ctx.lineTo(300, 200);
ctx.lineTo(100, 100);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(300, 300);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(250, 250, 100, 50);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.rect(50, 250, 100, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillRect(100, 300, 50, 25);
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 150, 60, 0, Math.PI,false);
ctx.arc(250, 150, 60, 0, Math.PI,false);
ctx.stroke();
ctx.closePath();


var x = 0;
var y = 0;
var dx = 20;

function deplacerRectangle()
{
    console.log("x : " + x )
    ctx.fillRect(x, y, 50, 25);
    x = x + dx;
    
}

function essai ()
{
  //  setInterval(deplacerRectangle, 1);
}


