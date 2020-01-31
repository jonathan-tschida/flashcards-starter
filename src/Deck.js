class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length;
  }

  shuffle() {
    var counter = this.cards.length;
    while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;
      var temp = this.cards[counter];
      this.cards[counter] = this.cards[index];
      this.cards[index] = temp;
    }
    return this.cards;
  }
}

module.exports = Deck;
