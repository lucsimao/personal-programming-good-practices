/**
 * Rule 2: Don’t Use The ELSE Keyword
 *
 * We can remove else keyword easily by using early return / guard clause
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

const isFaceCard_WithoutCalisthenics = (card) => {
  if (card.number > 10) {
    return true;
  } else {
    return false;
  }
};

/**
 * With Object Calisthenics
 * */

const isFaceCard_WithCalisthenics = (card) => {
  if (card.number > 10) {
    return true;
  }
  return false;
};

/**
 * With Object Calisthenics (without if)
 * */

const isFaceCard_WithCalisthenics_WithoutIf = (card) => {
  return card.number > 10;
};
