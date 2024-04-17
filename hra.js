import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const fields = document.querySelectorAll('.piskvorky__board--field');

const handleClick = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('piskvorky__board--field--circle');
    currentPlayer = 'cross';
    document.querySelector('.player').src = 'images/cross.svg';
    document.querySelector('.player').alt = 'křížek';
  } else {
    event.target.classList.add('piskvorky__board--field--cross');
    currentPlayer = 'circle';
    document.querySelector('.player').src = 'images/circle.svg';
    document.querySelector('.player').alt = 'kolečko';
  }
};

fields.forEach((field) => {
  field.addEventListener('click', handleClick);
});

fields.forEach((field) => {
  field.addEventListener('click', () => {
    const playBoard = Array.from(fields).map((field) => {
      if (field.classList.contains('piskvorky__square--circle')) {
        return 'o';
      } else if (field.classList.contains('piskvorky__square--cross')) {
        return 'x';
      } else {
        return '_';
      }
    });

    const winnerIs = findWinner(playBoard);
    const writeWinner = () => {
      if (winnerIs === 'x' || winnerIs === 'o') {
        alert(`Vyhrál hráč se symbolem ${winnerIs}.toUpperCase!`);
        location.reload();
      } else if (winnerIs === 'tie') {
        alert('Hra skončila nerozhodně!');
        location.reload();
      }
    };

    setTimeout(writeWinner, 500);
  });
});

const restartButton = document.querySelector('.button__restart');
restartButton.addEventListener('click', (e) => {
  const confirmation = confirm('Opravdu chceš začít hrát znovu?');
  if (!confirmation) {
    e.preventDefault();
  } else {
    location.reload();
  }
});
