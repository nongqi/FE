/*
 * @Author: vayne
 * @Date: 2022-04-26 08:49:51
 * @LastEditTime: 2022-04-29 16:54:55
 * @LastEditors: vayne.nong
 * @Description:
 */

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

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformances);
  statementData.totalAmount = totalVolumeCredits(statementData)
  statementData.totalAmount = totalAmount(statementData)
  return renderPlainText(statementData, plays);

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function enrichPerformances(aPerformances) {
    const result = Object.assign({}, aPerformances);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);

    return result;

    function playFor(aPerformances) {
      return plays[aPerformances.playID];
    }

    function amountFor(aPerformances) {
      let result = 0;
      switch (aPerformances.play.type) {
        case 'tragedy':
          result = 40000;
          if (aPerformances.audience > 30) {
            result += 1000 * (aPerformances.audience - 30);
          }
          break;
        case 'comedy':
          result = 30000;
          if (aPerformances.audience > 20) {
            result += 10000 + 500 * (aPerformances.audience - 20);
          }
          break;
        default:
          throw new Error(`unknown type: ${aPerformances.play.type}`);
      }
      return result;
    }

    function volumeCreditsFor(aPerformances) {
      let result = 0;
      result += Math.max(aPerformances.audience - 30, 0);
      if ('comedy' === aPerformances.play.type)
        result += Math.floor(aPerformances.audience / 5);
      return result;
    }
  }
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // print line for this order
    result += `  ${perf.play.name}: ${usd(perf.amount)} ${
      perf.audience
    } seats\n`;
  }
  result += `Amount owed os ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  
}

console.log(statement(INVOICES[0], PLAYS));
