var score = 0;
var aWidth;
var aHeight;
var timer;
var timer2;
var level = 1000;
var speed = 1;

function levelUp(speed){
    if (speed == 1) {
        level = 1000;
        
    }
    if (speed == 2) {
        level = 500;
    }
    if (speed == 3) {
        level = 100;
    }

    scoreLabel.innerHTML = "Score: " + score + "  Level: " + speed;
}

function setGameAreaBounds() {
    if (document.all) {
        aWidth = document.body.clientWidth;
        aHeight = document.body.clientHeight;
    } else {
        aWidth = innerWidth;
        aHeight = innerHeight;
    }

    aWidth -= 30;
    aHeight -= 95;

    document.getElementById("gameArea").style.width = aWidth;
    document.getElementById("gameArea").style.height = aHeight;

    aWidth -= 74;
    aHeight -= 74;

    moveDot();
    clearTimeout(timer2);
    timer2 = setTimeout("timesUp()", 30000);
}

function moveDot() {
    var x = Math.floor(Math.random() * aWidth);
    var y = Math.floor(Math.random() * aHeight);

    if (x < 10)
        x = 10;
    if (y < 10)
        y = 10;

    document.getElementById("dot").style.left = x;
    document.getElementById("dot").style.top = y;
    clearTimeout(timer);
    timer = setTimeout("moveDot()", level);

}

function pause() {
    //alert("test");
    //alert(document.getElementById("pause").getAttribute("value"));
    if (document.getElementById("pause").getAttribute("value") == "Pause") {
        document.getElementById("pause").setAttribute("value", "Start")
        clearTimeout(timer);
    } else {
        document.getElementById("pause").setAttribute("value", "Pause")
        moveDot();
    }


}

function myfunction(){
score=score+1;
scoreLabel.innerHTML="Score: "+score+" Level: "+speed;
}