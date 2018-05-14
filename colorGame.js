
var numColors = 6;
var colors = []; //generateRandomColorsForSquares(numColors)
var pickedColor; // = pickColor()
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
	//mode buttons event listener
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", modeBtnClicked);
	}
	colorDisplay.textContent = pickedColor;
	resetButton.addEventListener("click", resetColors);

	for(i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor = colors[i];	
		squares[i].addEventListener("click", clickedSquare);
	}
	resetColors()
}


function modeBtnClicked(){
	for (var i = 0;i < modeButtons.length; i++) {
		modeButtons[i].classList.remove("selectedLevel");
	}
	this.classList.toggle("selectedLevel");
	this.textContent === "Easy" ? (numColors = 3) : (numColors = 6)
	resetColors();
}

function hideBottom3Squares(){
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = 'none';
	}
}
function showBottom3Squares(){
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = 'block';
	}
}

function resetColors(){
	colors = generateRandomColorsForSquares(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = "";
	for(i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor = colors[i];	
	}
	h1.style.backgroundColor = "steelblue";
	numColors===3 ? hideBottom3Squares() : showBottom3Squares()
}

function pickColor(){
	var randomIndex = Math.floor(Math.random() * colors.length);
	// console.log('randomIndex: ', randomIndex);
	return colors[randomIndex];
}

function generateRandomColorsForSquares(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(generateRandomColor());
	}
	return arr;
}

function generateRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}


function clickedSquare() {	
	var clickedColor = this.style.backgroundColor;
	// console.log(clickedColor, pickedColor);
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct Pick!";
		resetButton.textContent = 'Play Again?';
		changeAllColors(clickedColor);		
	} else {
		// console.log("Choose again!")
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!"
	}
}

function changeAllColors(color) {
	for(i=0;i < squares.length;i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}