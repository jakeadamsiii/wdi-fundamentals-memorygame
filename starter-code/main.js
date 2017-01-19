//Cards and empty array 'cards in play'
var cards = ["queen","queen","king","king","jack","jack", "ace", "ace", "joker"];
var cardsInPlay=[];


var gameBoard = document.getElementById('game-board');

//timed reload on Joker as to see the card before the page relaods 
function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
}

//Randomize cards in play 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

cards = shuffle(cards);

//create game board and cards
function createBoard(){
  
    for(i=0;i<cards.length;i++){
      
        var newCard = document.createElement('div');
        newCard.className='card';
        newCard.setAttribute('data-card',cards[i]); 
        newCard.addEventListener('click',isTwoCards);
        gameBoard.appendChild(newCard);
    }
}

//Detect if two cards match 
function isMatch(cardsToMatch){
    if(cardsToMatch[0]===cardsToMatch[1]){
    	alert("You found a match!");
        modify_qty(1);
    }
    else{
        alert("Sorry, try again!");
         
    }
}

//Get card images If Joker = Game over!
function isTwoCards(){
    var cardType = this.getAttribute('data-card');
    cardsInPlay.push(cardType);
    if(cardType === "queen"){
        this.innerHTML= '<img src= "Queen.png" alt= "Queen Card" />';
    } 
    else if(cardType ==="king"){
        this.innerHTML= '<img src= "King.png" alt= "King Card" />';
    }
    else if(cardType ==="jack"){
        this.innerHTML= '<img src= "jack.png" alt= "Jack Card" />';
    }
    else if(cardType ==="ace"){
        this.innerHTML= '<img src= "ace.png" alt= "Ace Card" />';
    }
    else if(cardType ==="joker"){
        this.innerHTML= '<img src= "joker.png" alt= "Joker Card" />';
       alert("You got the Joker! Game Over!!");
        timedRefresh(500); 
     }
    if(cardsInPlay.length===2){
        isMatch(cardsInPlay);
        cardsInPlay=[];
    }
}


createBoard();

//Score board, modify quantity 
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

