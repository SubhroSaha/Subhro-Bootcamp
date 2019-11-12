var numOfSqr = 6;
var color = generateRandomColor(numOfSqr);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#reset");
var esyBtn = document.querySelector("#esyBtn");
var hrdBtn = document.querySelector("#hrdBtn");

esyBtn.addEventListener("click", function (){
	esyBtn.classList.add("selected");
	hrdBtn.classList.remove("selected");
	numOfSqr = 3;
	color = generateRandomColor(numOfSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < square.length; i++) {
		if (color[i]) {
			square[i].style.backgroundColor = color[i];
		} else {
			square[i].style.display = "none";
		}
	}
});

hrdBtn.addEventListener("click", function (){
	esyBtn.classList.remove("selected");
	hrdBtn.classList.add("selected");
	numOfSqr = 6;
	color = generateRandomColor(numOfSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color[i];
		square[i].style.display = "block";
	}
});

newColor.addEventListener("click", function () {
	reset();
});

function reset () {
	color = generateRandomColor(numOfSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	newColor.textContent = "New Color";
	message.textContent = "";
	for(var i = 0; i < square.length; i++){
		if(color[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = color[i];
		} else {
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < square.length ; i++) {
	square[i].style.backgroundColor = color[i];

	square[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor === pickedColor) {
			message.textContent = "Correct";
			newColor.textContent = "Play Again";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for (var i = 0 ; i < square.length ; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColor(num){
	var arr = [];
	for (var i = 0 ; i < num ; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";;
}



