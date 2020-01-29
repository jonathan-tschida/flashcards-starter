const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Game', function() {

  it('should create a deck of cards when the game starts', function() {
    const game = new Game();
    game.start();
    expect(game.deck).to.be.an.instanceof(Deck);
    expect(game.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should create a new round when the game starts', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
