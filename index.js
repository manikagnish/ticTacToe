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
      box.textContent = 'O';
      playerOneTurn = false;
      box.disabled = true;
      playerTwo.classList.add('active');
      playerOne.classList.remove('active');
      box.value = 'O';
      chechWinner();
    } else {
      box.textContent = 'X';
      playerOneTurn = true;
      box.disabled = true;
      playerOne.classList.add('active');
      playerTwo.classList.remove('active');
      box.value = 'X';
      chechWinner();
    }
  });
});

function chechWinner() {
  for (let winSeq of winArr) {
    let winOne = true;
    let winTwo = true;
    let count = 0;

    winSeq.forEach(winItem => {
      if (boxes[winItem].value === 'O') {
        winOne = winOne && true;
      } else {
        winOne = false;
      }
    });
    winSeq.forEach(winItem => {
      if (boxes[winItem].value === 'X') {
        winTwo = winTwo && true;
      } else {
        winTwo = false;
      }
    });
    boxes.forEach(box => {
      if (box.disabled === true) {
        count++;
      }
    });

    if (winOne) {
      winScreen('Player one won!', winSeq, winOne, winTwo);
      break;
    } else if (winTwo) {
      winScreen('Player two won!', winSeq, winOne, winTwo);
      break;
    } else if (count === 9) {
      winScreen("It's a draw", [0, 1, 2, 3, 4, 5, 6, 7, 8], winOne, winTwo);
      break;
    }
  }
}

function winScreen(message, winSeq, winOne, winTwo) {
  winMessage.textContent = message;
  winSeq.forEach(winItem => {
    boxes[winItem].style.backgroundColor = '#1fb91f';
  });
  boxes.forEach(box => (box.disabled = true));
  playAgain.innerHTML = `
    <button class="play-again-btn" onclick="relFun()">Play Again</button>
  `;
  playerOne.classList.remove('active');
  playerTwo.classList.remove('active');
}

function relFun() {
  location.reload();
}
