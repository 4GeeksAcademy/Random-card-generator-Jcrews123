/* eslint-disable */
import "bootstrap";
import "./style.css";

// document.onreadystatechange = function(event) {
//   if (document.readyState === "complete") {
//     addNewRandomCard();
//     const newCardButton = document.querySelector(".btn");
//     newCardButton.addEventListener("click", addNewRandomCard);
//   }
// };

// class Card {
//   //static currentId = 1; //makes code fail
//   constructor(suit, number) {
//     this.id = Card.currentId;
//     Card.currentId += 1;
//     this.suit = suit;
//     this.number = number;
//   }
//   static create() {
//     const [suit, number] = getInitialData();
//     const card = new Card(chooseRandomSuit(suit), chooseRandomNumber(number));
//   }
//   asHTMLElement() {
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");
//     cardDiv.setAttribute("id", `card-${this.id}`);
//   }
// }

// function addNewRandomCard() {
//   const card = Card.create();
//   const cardContainer = document.querySelector(".card");
//   cardContainer.appendChild(card.asHTMLElement());
// }♦
let suit = ["♦", "♥", "♠", "♣"];
let cardNumber = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
window.onload = function() {
  createSuit();

  const createNumber = `${chooseRandomNumber(cardNumber)}`;
  const newNumber = document.querySelector(".cardNumber");
  newNumber.textContent = createNumber;
};

// document.onreadystatechange = function(event) {
//   if (document.onreadystatechange === "complete") {
//   }
// };

// if (createSuit === "♥" || createSuit === "♦") {
//   createSuit.style.color = "red";
// } USE LATER

const newCardButton = document.querySelector(".btn");
newCardButton.addEventListener("click", createSuit);
newCardButton.addEventListener("click", createNumber);

function createNumber() {
  const createNumber = `${chooseRandomNumber(cardNumber)}`;
  const newNumber = document.querySelector(".cardNumber");
  newNumber.textContent = createNumber;
  return;
}

function createSuit() {
  const createSuit = `${chooseRandomSuit(suit)}`;
  const suitElementList = document.querySelectorAll(".suit");
  // const BRSuit = document.querySelector(".BRSuit");

  suitElementList.forEach(suitElement => {
    suitElement.textContent = createSuit;
    if (createSuit === "♥" || createSuit === "♦") {
      suitElement.style.color = "red";
      // document.querySelector(".BRSuit").style.color = "red";
    } else {
      suitElement.style.color = "black";
    }
  });
}

// function color() {
//   if (createSuit === "♥" || createSuit === "♦") {
//     createSuit.style.color = "red";
//  }
// }

function chooseRandomSuit(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function chooseRandomNumber(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
