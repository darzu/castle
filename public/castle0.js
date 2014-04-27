var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle game.");

var castleChar = "Ħ";
var castleColor = "rgb(0,0,100)";
var castleFont = "bold 100 sans-serif";
var castleY = 100;
var castleX = 10;

canvas.fillStyle = castleColor;
canvas.font = castleFont;

canvas.fillText(castleChar, castleX, castleY);

var enemyChar = "♞";
var enemyColor = "rgb(150,0,0)";
var enemyFont = "bold 50 sans-serif";
var enemyY = 100;

canvas.fillStyle = enemyColor;
canvas.font = enemyFont;

canvas.fillText(enemyChar, x, enemyY); 