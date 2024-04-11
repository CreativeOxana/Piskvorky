let currentPlayer = 'circle';

const handleClick = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('piskvorky__board--field--circle');
    currentPlayer = 'cross';
    document.querySelector('.player').src = 'images/cross.svg';
  } else {
    event.target.classList.add('piskvorky__board--field--cross');
    currentPlayer = 'circle';
    document.querySelector('.player').src = 'images/circle.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', handleClick);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', handleClick);

const restartButton = document.querySelector('.button__restart');
restartButton.addEventListener('click', (e) => {
  const confirmation = confirm('Opravdu chceš začít hrát znovu?');
  if (!confirmation) {
    e.preventDefault();
  } else {
    location.reload();
  }
});
