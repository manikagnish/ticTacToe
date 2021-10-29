'use strict';

const boxes = document.querySelectorAll('.box');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
let playerOneTurn = true;

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (playerOneTurn) {
      box.textContent = 'X';
      playerOneTurn = false;
      box.disabled = true;
      playerTwo.classList.add('active');
      playerOne.classList.remove('active');
    } else {
      box.textContent = 'O';
      playerOneTurn = true;
      box.disabled = true;
      playerOne.classList.add('active');
      playerTwo.classList.remove('active');
    }
  });
});
