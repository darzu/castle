function loadCastle0() {
  $.getScript( "castle0.js" );
};

function loadCastle1() {
  $.getScript( "castle1.js" );
};

function loadCastle2() {
  $.getScript( "castle2.js" );
};

function loadkp() {
  $.getScript( "kp.js" );
};

function erase() {
  var canvasElement = document.getElementById("castle-canvas");
  var canvas = canvasElement.getContext('2d');  
  canvas.fillStyle = "rgb(255, 255, 255)";
  canvas.fillRect(0,0, 1000, 100);
};