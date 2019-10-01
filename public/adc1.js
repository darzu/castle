var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle 6 game.");

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

var drawEnemy = function(enemy) {

  var enemyChars = {
    alive: "♞",
    dead: "X"
  };

  var enemyColor = "rgb(153,0,76)";
  var enemyFont = "bold 50 sans-serif";
  var enemyY = 100;

  canvas.fillStyle = enemyColor;
  canvas.font = enemyFont;

  canvas.fillText(enemyChars[enemy.state], enemy.x, enemyY);  

};

var spawnEnemy = function(x) {
  var newEnemy = {
    x: x,
    state: "alive"
  };

  enemies.push(newEnemy);
};

var drawArrow = function(arrow) {

  var arrowChar = "☀";
  var arrowColor = "rgb(0,150,150)";
  var arrowFont = "bold 20 sans-serif";
  var arrowY = 90;

  canvas.fillStyle = arrowColor;
  canvas.font = arrowFont;

  canvas.fillText(arrowChar, arrow.x, arrowY);  

};

var spawnArrow = function(x) {
  var newArrow = {
    x: x
  };

  arrows.push(newArrow);
};

var arrows;
var enemies;

var gameLoopIntervalMs = 30;
var enemySpawnChancePerSecond = 1.0;
var enemySpawnChancePerLoop = (gameLoopIntervalMs / 1000.0) * enemySpawnChancePerSecond;

var gameLoop = function() {
  
  erase();

  drawCastle();

  //draw and update each arrow
  arrows.forEach(function(arrow){
    arrow.x += 10;
    drawArrow(arrow);
  });

  //draw and update each enemy
  enemies.forEach(function(enemy){
    //Move enemy
    if (enemy.state == "alive") {
      enemy.x -= 10;
    }

    //If enemy reaches the castle, game over!
    if (enemy.x <= 50) {
      var statusText = $("#status");
      statusText.text("Your castle has fallen!");
      statusText.css("color", "red");
      statusText.css("font-size", "2rem")
      stop();
    }

    //Draw enemy
    drawEnemy(enemy);

    var hasEnemyHitArrow = function(enemy, arrow) {
      return Math.abs(enemy.x - arrow.x) <= 10;
    };
    //check if this enemy is hit by any arrow
    if (enemy.state == "alive") {
      for (var i = arrows.length - 1; i >= 0; i -= 1){
        var arrow = arrows[i];
        if(hasEnemyHitArrow(enemy, arrow)){//if the enemy and arrow are within 10 units it is a hit
          enemy.state = "dead";

          arrows.splice(i, 1);
        }
      }
    }
  });

  //random chance to spawn enemies
  if (Math.random() < enemySpawnChancePerLoop) {
    spawnEnemy(900);
  }
};

var gameLoopId;

var start = function() {
  if (!gameLoopId) {
    gameLoopId = setInterval(gameLoop, gameLoopIntervalMs);
  }
};

var stop = function() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    gameLoopId = null;
  }
};

var reset = function() {
  arrows = [];
  enemies = [];
  var statusText = $("#status");
  statusText.text("Fight off the hord!");
  statusText.css("color", "black");
  statusText.css("font-size", "1rem")
};

//Spawn arrows when clicking space
var spaceKeyCode = 32;
$(document).keyup(function(keyEvent) {
  if (keyEvent.keyCode == spaceKeyCode) {
    spawnArrow(100);
  }
});

reset();