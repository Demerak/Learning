
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
// . is for selecting a class and # is for selecting a id
// alternative -> let sumEl = document.querySelector("#sum-el");

let player = {
    name: "Sam",
    chips: 250
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card > 10) {
        card = 10;
    } else if (card === 1) {
        card = 11;
    }
    return card;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    // render out All the cards we have
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You're out of the game! ";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }     
}
    