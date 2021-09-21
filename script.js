'use strict';

document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
const dice = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector(`.player--1`);
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores = [0,0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}



btnRoll.addEventListener('click', function() {
    if (playing) {
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${randomDice}.png`;
    if (randomDice !== 1) {
        currentScore += randomDice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        console.log(randomDice);

    } else {
        switchPlayer();
    }    
}
});

btnHold.addEventListener('click', function() {
    if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        
    } else {
        switchPlayer();
    }
    }


});

btnNew.addEventListener('click', function() {
    playing = true;
    dice.src = `dice-5.png`;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
    scores = [0,0];
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
});




