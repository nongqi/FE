/*
 * @Author: vayne
 * @Date: 2022-04-26 08:49:51
 * @LastEditTime: 2022-04-29 17:23:44
 * @LastEditors: vayne.nong
 * @Description:
 */

// import createStatementData from './createStatementData'
const createStatementData = require('./createStatementData');

const PLAYS = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const INVOICES = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += `<table>\n`;
  result += `<tr><th>play</th><th>seats</th><th>cost</th></tr>`;
  for (let perf of data.performances) {
    // print line for this order
    result += `  <tr><td>${perf.play.name}</td><td>${usd(perf.amount)}</td>`;
    result += `<td>${perf.audience}</td></tr>\n`;
  }
  result += `</table>\n`;

  result += `<p>Amount owed os <em>${usd(data.totalAmount)}</em></p>`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

console.log(htmlStatement(INVOICES[0], PLAYS));
