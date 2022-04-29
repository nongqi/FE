/*
 * @Author: vayne
 * @Date: 2022-04-26 08:49:51
 * @LastEditTime: 2022-04-29 15:26:14
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
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // print line for this order
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} ${
      perf.audience
    } seats\n`;
  }
  result += `Amount owed os ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

  function playFor(aPerformances) {
    return plays[aPerformances.playID];
  }

  function amountFor(aPerformances) {
    let result = 0;
    switch (playFor(aPerformances).type) {
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
        throw new Error(`unknown type: ${playFor(aPerformances).type}`);
    }
    return result;
  }

  function volumeCreditsFor(aPerformances) {
    let result = 0;
    result += Math.max(aPerformances.audience - 30, 0);
    if ('comedy' === playFor(aPerformances).type)
      result += Math.floor(aPerformances.audience / 5);
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += amountFor(perf);
    }
    return result;
  }
  
}

console.log(statement(INVOICES[0], PLAYS));


