class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = this.shuffle(answers);
    this.correctAnswer = correctAnswer;
  }

  shuffle(answers) {
    var counter = answers.length;
    while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;
      var temp = answers[counter];
      answers[counter] = answers[index];
      answers[index] = temp;
    }
    return answers;
  }
}

module.exports = Card;
