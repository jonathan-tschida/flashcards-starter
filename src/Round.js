const util = require('./util');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    let feedback = turn.giveFeedback();
    turn.evaluateGuess() || this.incorrectGuesses.push(this.returnCurrentCard().id);
    this.turns++;
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length)/this.turns) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    if (this.calculatePercentCorrect() < 90) {
      console.log(`**** Looks like you need more practice! Try again! ****`);
      this.turns = 0;
      this.incorrectGuesses = [];
      util.main(this);
    }
  }
}

module.exports = Round;
