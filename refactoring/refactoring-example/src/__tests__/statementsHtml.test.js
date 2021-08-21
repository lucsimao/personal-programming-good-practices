const { htmlStatement } = require('../statements');

describe(`Statements HTML tests`, () => {
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
    const result = htmlStatement(invoice, plays);
    resultExpected =
      '<h1>Statement for BigCo</h1>\n' +
      '<table>\n' +
      '  <tr><th>play</th><th>seats</th><th>cost</th></tr>\n' +
      '  <tr><td>Hamlet</td><td>55</td>\n' +
      '  <td>$650.00</td></tr>\n' +
      '  <tr><td>AS You Like It</td><td>35</td>\n' +
      '  <td>$580.00</td></tr>\n' +
      '  <tr><td>Othello</td><td>40</td>\n' +
      '  <td>$500.00</td></tr>\n' +
      '</table>\n' +
      '<p>Amount owed is <em>$1,730.00</em></p>\n' +
      '<p>You earned <em>47</em></p>\n';
    expect(result).toEqual(resultExpected);
  });
});
