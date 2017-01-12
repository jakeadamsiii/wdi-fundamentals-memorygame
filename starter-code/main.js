var cards = ["queen","queen","king","king"];
var cardsInPlay=[];
var count = 0;
var score = 0;

var gameBoard = document.getElementById('game-board');

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
}


function createBoard(){
  
    for(i=0;i<cards.length;i++){
      
        var newCard = document.createElement('div');
        newCard.className='card';
        newCard.setAttribute('data-card',cards[i]); 
        newCard.addEventListener('click',isTwoCards);
        gameBoard.appendChild(newCard);
    }
}


function isMatch(cardsToMatch){
    if(cardsToMatch[0]===cardsToMatch[1]){
    	alert("You found a match!");
        timedRefresh(500);
        count++; 
        score++;
    }
    else{
        alert("Sorry, try again!");
        timedRefresh(500);
        count++; 
    }
}


function isTwoCards(){
    var cardType = this.getAttribute('data-card');
    cardsInPlay.push(cardType);
    if(cardType === "queen"){
        this.innerHTML= '<img src= "Queen.png" alt= "Queen Card" />';
    } 
    else if(cardType ==="king"){
        this.innerHTML= '<img src= "King.png" alt= "King Card" />';
    }
    if(cardsInPlay.length===2){
        isMatch(cardsInPlay);
        cardsInPlay=[];
    }
}



createBoard();
