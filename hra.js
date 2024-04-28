import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
let playBoard = [];

const makingMove = () => {
  const playBoardElm = Array.from(fields);
  playBoard = playBoardElm.map((field) => {
    if (field.classList.contains('piskvorky__board--field--circle')) {
      return 'o';
    } else if (field.classList.contains('piskvorky__board--field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });
};

const handleAITurn = async () => {
  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board: playBoard,
        player: 'x',
      }),
    },
  );

  const data = await response.json();
  const { x, y } = data.position;
  const fieldIndex = x + y * 10;
  const field = fields[fieldIndex];
  field.click();
};

const checkGameStatus = () => {
  const winner = findWinner(playBoard);
  const alertWinner = () => {
    alert(`Vyhrál hráč se symbolem ${winner}`);
    location.reload();
  };
  const alertTie = () => {
    alert('Hra skončila nerozhodně!');
    location.reload();
  };
  if (winner === 'x' || winner === 'o') {
    setTimeout(alertWinner, 300);
  } else if (winner === 'tie') {
    setTimeout(alertTie, 300);
  }
};

const handleClick = async (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('piskvorky__board--field--circle');
    currentPlayer = 'cross';
    document.querySelector('.player').src = 'images/cross.svg';
    document.querySelector('.player').alt = 'křížek';
    makingMove();
    checkGameStatus();
  } else if (currentPlayer == 'cross') {
    event.target.classList.add('piskvorky__board--field--cross');
    currentPlayer = 'circle';
    document.querySelector('.player').src = 'images/circle.svg';
    document.querySelector('.player').alt = 'kolečko';
    makingMove();
    checkGameStatus();
    handleAITurn();
  }
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
