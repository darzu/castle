var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle 5 game.");

var erase = function() {
  canvas.fillStyle = "rgb(255, 255, 255)";
  canvas.fillRect(0,0, 1000, 100);
};

var drawCastle = function() {

  var castleChar = "Ħ";
  var castleColor = "rgb(0,0,100)";
  var castleFont = "bold 100 sans-serif";
  var castleY = 100;
  var castleX = 10;

  canvas.fillStyle = castleColor;
  canvas.font = castleFont;

  canvas.fillText(castleChar, castleX, castleY);
};

var drawEnemy = function(x, state) {

  var enemyChars = {
    alive: "♞",
    dead: "X"
  };

  var enemyColor = "rgb(153,0,76)";
  var enemyFont = "bold 50 sans-serif";
  var enemyY = 100;

  canvas.fillStyle = enemyColor;
  canvas.font = enemyFont;

  canvas.fillText(enemyChars[state], x, enemyY);  

};

var drawArrow = function(x,y) {

  var arrowChar = "☀";
  var arrowColor = "rgb(0,150,150)";
  var arrowFont = "bold 20 sans-serif";

  canvas.fillStyle = arrowColor;
  canvas.font = arrowFont;

  canvas.fillText(arrowChar, x, y);  

};

var enemyX
    ,arrowX
    ,arrowY
    ,enemyState;

var gameLoop = function() {
  
  erase();

  drawCastle();

  arrowX += 10;
  arrowY = 90;
  drawArrow(arrowX,arrowY);

  enemyX -= 10;
  drawEnemy(enemyX, enemyState);

  if(enemyX === arrowX){
    enemyState = "dead";
    console.log("there was a hit!");
  }

};

var gameLoopId;

var start = function() {
  if (!gameLoopId) {
    gameLoopId = setInterval(gameLoop, 30);
  }
};

var stop = function() {
  if (!gameLoopId) {
    clearInterval(gameLoopId);
    gameLoopId = null;
  }
};

var reset = function() {
  enemyX = 900;
  arrowX = 100;
  arrowY = 85;
  enemyState = "alive";
  stop();
};

reset();