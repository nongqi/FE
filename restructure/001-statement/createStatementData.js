/*
 * @Author: vayne
 * @Date: 2022-04-29 17:01:55
 * @LastEditTime: 2022-05-01 16:57:14
 * @LastEditors: vayne.nong
 * @Description: 创建 StatementData
 */

function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformances);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  statementData.totalAmount = totalAmount(statementData);
  return statementData;

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function enrichPerformances(aPerformances) {
    const calculator = new PerformanceCalculator(aPerformances, playFor(aPerformances));
    const result = Object.assign({}, aPerformances);
    result.play = calculator.play;
    // result.amount = amountFor(result);
    result.amount = calculator.amount
    result.volumeCredits = volumeCreditsFor(result);

    return result;

    function playFor(aPerformances) {
      return plays[aPerformances.playID];
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

class PerformanceCalculator {
  constructor(aPerformances, aPlay) {
    this.performances = aPerformances;
    this.play = aPlay;
  }
  get amount() {
    let result = 0;
      switch (this.play.type) {
        case 'tragedy':
          result = 40000;
          if (this.performances.audience > 30) {
            result += 1000 * (this.performances.audience - 30);
          }
          break;
        case 'comedy':
          result = 30000;
          if (this.performances.audience > 20) {
            result += 10000 + 500 * (this.performances.audience - 20);
          }
          break;
        default:
          throw new Error(`unknown type: ${this.play.type}`);
      }
      return result;
  }
}

module.exports = createStatementData;



