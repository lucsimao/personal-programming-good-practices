/**
 * Rule 1: Only One Level Of Indentation Per Method
 *
 * If you have various conditions at different level,
 * or a loop in another loop or a function which have more than one indentation,
 * you can always simplify it or extract it‌
 */

class Card {
  constructor(number, suit) {
    this._number = number;
    this._suit = suit;
  }
}

/**
 * Without Object Calisthenics
 * */

const createRoyalDeck_WithoutCalisthenics = () => {
  const max_card_number = 13;
  const suites = ["diamonds", "hearts", "spades", "clubs"];
  const deck = [];

  for (let number = 1; number <= max_card_number; number++) {
    for (let suit of suites) {
      deck.push(new Card(number, suit));
    }
  }
};

/**
 * With Object Calisthenics
 * */

const createRoyalDeck_WithCalisthenics = () => {
  const deck = [];

  fillNumbers(deck);

  return deck;
};

const fillSuits = (deck, number) => {
  const suits = ["diamonds", "hearts", "spades", "clubs"];

  for (let suit of suits) {
    deck.push(new Card(number, suit));
  }
};

const fillNumbers = (max_card_number, deck) => {
  const max_card_number = 13;

  for (let number = 0; number < max_card_number; number++) {
    fillSuits(deck, number);
  }
};
