var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle game.");

var erase = function () {
  canvas.fillStyle = "rgb(255, 255, 255)";
  canvas.fillRect(0, 0, 1000, 100);
};

var drawCastle = function () {

  var castleChar = "Ħ";
  var castleColor = "rgb(0,0,100)";
  var castleFont = "bold 100 sans-serif";
  var castleY = 100;
  var castleX = 10;

  canvas.fillStyle = castleColor;
  canvas.font = castleFont;

  canvas.fillText(castleChar, castleX, castleY);
};

var drawEnemy = function (x) {

  var enemyChar = "♞";
  var enemyColor = "rgb(150,0,0)";
  var enemyFont = "bold 50 sans-serif";
  var enemyY = 100;

  canvas.fillStyle = enemyColor;
  canvas.font = enemyFont;

  canvas.fillText(enemyChar, x, enemyY);

};

var drawArrow = function (x) {

  var arrowChar = "☀";
  var arrowColor = "rgb(0,150,150)";
  var arrowFont = "bold 20 sans-serif";
  var arrowY = 85;

  canvas.fillStyle = arrowColor;
  canvas.font = arrowFont;

  canvas.fillText(arrowChar, x, arrowY);

};

var enemyX = 900;
var arrowX = 100;

var gameLoop = function () {
  erase();

  drawCastle();

  enemyX -= 2;
  drawEnemy(enemyX);

  arrowX += 20;
  drawArrow(arrowX);
};


let gameLoop2 = function (timeMs) {
  console.log('gameloop');
  gameLoopReg = window.requestAnimationFrame(gameLoop2);
  gameLoop();
};

gameLoop2(0);

// var gameLoopId;
// var start = function () {
//   gameLoopId = setInterval(gameLoop, 30);
// };
// var stop = function () {
//   clearInterval(gameLoopId);
// };

//start(); this would automatically start the game