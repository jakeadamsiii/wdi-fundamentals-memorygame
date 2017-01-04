var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo){
	alert("You found a match!");
}else if (cardThree === cardFour){
    alert("You found a match!");
    }else if (cardOne !== cardThree){
    	alert("Sorry, try again!");
    } else {
    	alert("Sorry, try again!");
    }*/

var createCards = function(){
for (var i =0; i<4; i++){
var getBoard = document.getElementById('game-board');
var newDiv = document.createElement('div');
newDiv.className = 'card';
getBoard.appendChild(newDiv);
}
}

window.onload =  createCards;