const { statement } = require('../statements');

describe(`Statements tests`, () => {
  it('should return correct string when receive the example json', () => {
    const plays = {
      hamlet: { name: 'Hamlet', type: 'tragedy' },
      'as-like': { name: 'AS You Like It', type: 'comedy' },
      othello: { name: 'Othello', type: 'tragedy' },
    };

    const invoice = {
      customer: 'BigCo',
      performances: [
        { playId: 'hamlet', audience: 55 },
        { playId: 'as-like', audience: 35 },
        { playId: 'othello', audience: 40 },
      ],
    };
    const result = statement(invoice, plays);
    resultExpected = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n AS You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`;
    expect(result).toEqual(resultExpected);
  });
});
