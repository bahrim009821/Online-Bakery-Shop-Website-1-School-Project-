var can;
var ctx;
var interval1 = 0;
var interval2 = 0;
var interval3 = 0;
var intervalSquare = 0;

var moveX = 0;
var moveXX = 1470;
var MoveY = 15;
var CanvasWidth = 1530;
var CanvasHeight = 680;
function startCanvas() {
    can = document.getElementById("myCanvas");
    ctx = can.getContext("2d");
    can.width = CanvasWidth;
    can.height = CanvasHeight;
}
function clearAllCanvas() {
    ctx.clearRect(0, 0, 1530, 680);

}
function clearCanvas() {
    ctx.clearRect(0, 0, 500, 16);
    moveYclear = moveYclear + 15;
}
function clearCanvas2() {
    ctx.clearRect(0, 0, 1530, MoveY - 15);
}
function cleanEntireCanvas() {
    ctx.clearRect(0, 0, can.width, can.height);
    ctx.clearRect(0, 0, 1470, 620);
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(intervalSquare);

}

function namCreator() {
    ctx.fillStyle = "rgb(116,255,40)";
    ctx.font = "18px Algerian";
    moveMyname();
}
function moveMyname() {


    ctx.fillText("Mohammad Hossein Bahri", 0, MoveY);

    if (MoveY > 55) {

        clearCanvas2();
    }
    MoveY = MoveY + 55;

    if (MoveY > 730) {
        MoveY = 0;
    }
}

function Squares() {
    clearAllCanvas();

    ctx.fillStyle = "blue";
    ctx.fillRect(moveX, 0, 60, 60);
    ctx.fillStyle = "yellow";
    ctx.fillRect(moveXX, 620, 60, 60);
    moveX = moveX + 15;
    moveXX = moveXX - 15;
    if (moveX > 1470) {
        moveX = 0;
    }
    if (moveXX < 0) {
        moveXX = 1470;
    }


}
function squreTimer() {
    intervalSquare = setInterval(Squares, 20);
    clearAllCanvas();
}


function firstInit() {
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(50, 550);
    ctx.lineTo(50, 150);
    ctx.lineTo(250, 400);
    ctx.lineTo(450, 150);
    ctx.lineTo(450, 550);
    ctx.stroke();
}

function secondInit() {
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(500, 550);
    ctx.lineTo(500, 130);
    ctx.lineTo(500, 350);
    ctx.lineTo(900, 350);
    ctx.lineTo(900, 550);
    ctx.lineTo(900, 130);
    ctx.stroke();
}

function thirdInit() {
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(950, 500);
    ctx.lineTo(950, 200);
    ctx.lineTo(1150, 200);
    ctx.lineTo(1150, 350);
    ctx.lineTo(950, 350);
    ctx.lineTo(1150, 350);
    ctx.lineTo(1150, 500);
    ctx.lineTo(943, 500);
    ctx.stroke();

}
function timer() {
    interval = setInterval(firstInit, 1000);
    interval2 = setInterval(secondInit, 4000);
    interval3 = setInterval(thirdInit, 7000);

}
