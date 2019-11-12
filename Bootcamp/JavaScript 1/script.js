var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1score = 0;
var p2score = 0;
var rst = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;
var inputNumber = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1.addEventListener("click", function () {
	if (!gameOver) {
		p1score++;
		if (p1score === winningScore) {
			gameOver = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1score;
	}
});

p2.addEventListener("click", function () {
	if (!gameOver) {
		p2score++;
		if (p2score === winningScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2score;
	}
});

rst.addEventListener("click", function () {
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

inputNumber.addEventListener("change", function(){
	winningScoreDisplay.textContent = inputNumber.value;
	winningScore = Number(inputNumber.value);
	reset();
});