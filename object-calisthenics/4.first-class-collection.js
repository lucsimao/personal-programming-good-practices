/**
 * Rule 4: First Class Collections
 *
 * Every collection should be contained or wrapped in its own class
 */

/**
 * Without Object Calisthenics
 * */

class PokerGame_WithoutCalisthenics {
  constructor() {
    this._deck = [];
  }

  addCard(card) {
    this._deck.push[card];
  }

  drawCard() {
    const lastPosition = this._deck.length - 1;
    return this._deck.pop[lastPosition];
  }

  startGame() {
    //Shuffle deck
    for (var i = this._deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this._deck[i];
      this._deck[i] = this._deck[j];
      this._deck[j] = temp;
    }
  }
}

/**
 * With Object Calisthenics
 * */

class PokerGame_WithCalisthenics {
  constructor() {
    this._deck = new Deck();
  }

  startGame() {
    this._deck.shuffle();
  }
}

class Deck {
  constructor() {
    this._cards = [];
  }

  addCard(card) {
    this._cards.push(card);
  }

  drawCard() {
    const lastPosition = this._deck.length - 1;
    return this._deck.pop[lastPosition];
  }

  shuffle() {
    for (var i = this._deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this._deck[i];
      this._deck[i] = this._deck[j];
      this._deck[j] = temp;
    }
  }
}
