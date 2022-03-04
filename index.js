console.log("connected to server");

var numOfSquares = 6;
var colors = generateColors(numOfSquares);
var pickedColor = pickColor();
var h1 = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var message = document.querySelector("#message");
var rgbCode = document.querySelector("#rgbCode");
var reset = document.querySelector("#reset");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

easy.addEventListener("click", function () {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numOfSquares = 3;
  h1.style.background = "black";
  message.textContent = "";
  message.style.background = "white";
  colors = generateColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } 
    else {
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click", function () {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  h1.style.background = "black";
  message.textContent = "";
  message.style.background = "white";
  numOfSquares = 6;
  colors = generateColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.background = colors[i];
  }
});

rgbCode.textContent = pickedColor;

reset.addEventListener("click", function () {
  message.style.background = "white";
  colors = generateColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "NEW COLOR";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "black";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    console.log(clickedColor);
    if (clickedColor === pickedColor) {
      correct.play();
      console.log(clickedColor);
      message.textContent = "Good Job!";
      message.style.background = "rgb(57, 84, 206)";
      message.style.color = "white";
      reset.textContent = "PLAY AGAIN";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } 
    else {
      wrong.play();
      this.style.background = "black";
      message.textContent = "Try Again";
      message.style.background = "red";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

function generateColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
