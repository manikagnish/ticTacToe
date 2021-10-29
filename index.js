'use strict';

const boxes = document.querySelectorAll('.box');
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const winMessage = document.getElementById('win-message');
const playAgain = document.getElementById('play-again');
let playerOneTurn = true;

const winArr = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (playerOneTurn) {
      box.textContent = 'X';
      playerOneTurn = false;
      box.disabled = true;
      playerTwo.classList.add('active');
      playerOne.classList.remove('active');
      box.value = 'X';
      chechWinner();
    } else {
      box.textContent = 'O';
      playerOneTurn = true;
      box.disabled = true;
      playerOne.classList.add('active');
      playerTwo.classList.remove('active');
      box.value = 'O';
      chechWinner();
    }
  });
});

function chechWinner() {
  winArr.forEach(winSeq => {
    let winOne = true;
    let winTwo = true;
    winSeq.forEach(winItem => {
      if (boxes[winItem].value === 'X') {
        winOne = winOne && true;
      } else {
        winOne = false;
      }
    });
    winSeq.forEach(winItem => {
      if (boxes[winItem].value === 'O') {
        winTwo = winTwo && true;
      } else {
        winTwo = false;
      }
    });
    if (winOne) {
      winSeq.forEach(winItem => {
        boxes[winItem].style.backgroundColor = '#1fb91f';
      });
      winMessage.textContent = 'Player one won!';
      boxes.forEach(box => (box.disabled = true));
      playAgain.innerHTML = `
        <button class="play-again-btn" onclick="relFun()">Play Again</button>
      `;
    } else if (winTwo) {
      winMessage.textContent = 'Player two won!';
      winSeq.forEach(winItem => {
        boxes[winItem].style.backgroundColor = '#1fb91f';
      });
      boxes.forEach(box => (box.disabled = true));
      playAgain.innerHTML = `
        <button class="play-again-btn" onclick="relFun()">Play Again</button>
      `;
    }
  });
}

function relFun() {
  location.reload();
}
