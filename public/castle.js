var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle game.");

var clear = function() {
  canvas.fillStyle = "rgb(255, 255, 255)";
  canvas.fillRect(0,0, 1000, 100);
};

var drawCastle = function() {

  var castleChar = "Ħ";
  var castleColor = "rgb(200,0,0)";
  var castleFont = "bold 100 sans-serif";
  var castleY = 100;
  var castleX = 10;

  canvas.fillStyle = castleColor;
  canvas.font = castleFont;

  canvas.fillText(castleChar, castleX, castleY);
};

var drawEnemy = function(x) {

  var enemyChar = "♞";
  var enemyColor = "rgb(200,0,0)";
  var enemyFont = "bold 50 sans-serif";
  var enemyY = 100;

  canvas.fillStyle = enemyColor;
  canvas.font = enemyFont;

  canvas.fillText(enemyChar, x, enemyY);  

};

var drawArrow = function(x) {

  var arrowChar = "☀";
  var arrowColor = "rgb(200,0,0)";
  var arrowFont = "bold 20 sans-serif";
  var arrowY = 85;

  canvas.fillStyle = arrowColor;
  canvas.font = arrowFont;

  canvas.fillText(arrowChar, x, arrowY);  

};

drawCastle();

drawEnemy(800);

drawArrow(500);
