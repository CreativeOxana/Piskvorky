import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

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

  const playBoardElm = Array.from(fields);
  const playBoard = playBoardElm.map((field) => {
    if (field.classList.contains('piskvorky__square--circle')) {
      return 'o';
    } else if (field.classList.contains('piskvorky__square--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const findingWinner = () => {
    const winner = findWinner(playBoard);
    if (winner === 'o') {
      alert(`Vyhrálo kolečko!`);
      location.reload();
    } else if (winner === 'x') {
      alert('Vyhrál křížek!');
      location.reload();
    } else if (winner === 'tie') {
      alert('Hra skončila nerozhodně!');
      location.reload();
    }
  };
  setTimeout(findingWinner, 500);
};

const fields = document.querySelectorAll('.piskvorky__board--field');
fields.forEach((field) => {
  field.addEventListener('click', handleClick);
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
