function startGame(){
    gameLoop();
}

var count = 0; 
var personVis = false;

function gameLoop(){
    personVis = !personVis

    if(personVis == true){
        var classToset = "character visible";
    }
    else{
        var classToset = "character hidden";
    }

    var gamezone = document.getElementById("gamezone");

    for( i = 0; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "";
    }

    var randomNum = Math.floor(Math.random()*8) +1;

    gamezone.children[randomNum-1].innerHTML = "";

    gamezone.children[randomNum-1].className = classToset + " sniper";

    count++;

    if (count < 15){
        setTimeout(gameLoop, 3000)
    }
    else{
        alert("Игра окончена");
    }
}