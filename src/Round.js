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
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
