'use strict';

const boxes = document.querySelectorAll('.box');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
let playerOneTurn = true;

if (playerOneTurn) {
  playerOne.classList.add('active');
  playerTwo.classList.remove('active');
} else {
  playerTwo.classList.add('active');
  playerOne.classList.remove('active');
}

boxes.forEach(box => {
  box.addEventListener('click', display);
});
