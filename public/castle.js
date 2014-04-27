var canvasElement = document.getElementById("castle-canvas");
var canvas = canvasElement.getContext('2d');

console.log("Starting the castle game.");

canvas.fillStyle = "rgb(200,0,0)";
canvas.fillRect(100, 20, 100, 10);

canvas.font = "bold 20px sans-serif";

canvas.fillText("FOO", 10, 10);
