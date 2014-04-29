var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle game.");

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

var drawEnemy = function(x) {

  var enemyChar = "♞";
  var enemyColor = "rgb(153,0,76)";
  var enemyFont = "bold 50 sans-serif";
  var enemyY = 100;

  canvas.fillStyle = enemyColor;
  canvas.font = enemyFont;

  canvas.fillText(enemyChar, x, enemyY);  

};

var drawArrow = function(x,y) {

  var arrowChar = "☀";
  var arrowColor = "rgb(0,150,150)";
  var arrowFont = "bold 20 sans-serif";
  //var arrowY = 85;

  canvas.fillStyle = arrowColor;
  canvas.font = arrowFont;

  canvas.fillText(arrowChar, x, y);  

};

var drawDead = function(x){
  var deadChar = "X";
  var deadColor = "rgb(0,153,0)";
  var deadFont = "bold 40 sans-serif";
  var deadY = 100;

  canvas.fillStyle = deadColor;
  canvas.font = deadFont;

  canvas.fillText(deadChar, x, deadY)
}

var enemyX = 900;
var arrowX = 100;
var arrowY = 85
var alive = true;
var check = true; 

var gameLoop = function() {
  
  erase();

  drawCastle();

  arrowX += 10;
  arrowY = 90;
  drawArrow(arrowX,arrowY);

  enemyX -= 10;
  drawEnemy(enemyX);

  if(enemyX === arrowX){
    drawDead(enemyX);
    console.log("there was a hit!");
    //check = false;
   }

};

gameLoop();

var gameLoopId;


var start = function() {
  while(check){
    gameLoopId = setInterval(gameLoop, 30);
    check = false; //this will make sure start cannot be pressed multiple times
  }
  
};

var stop = function() {
  clearInterval(gameLoopId);
  check = true;
};

var reset = function() {
  enemyX = 900;
  arrowX = 100;
  arrowY = 85;
  stop();
  check = true;
  gameLoop()
}

//start(); this would automatically start the game