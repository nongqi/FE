/*
 * @Author: vayne
 * @Date: 2022-04-29 17:01:55
 * @LastEditTime: 2022-05-01 17:48:01
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
    const calculator = createPerformanceCalculator(
      aPerformances,
      playFor(aPerformances)
    );
    const result = Object.assign({}, aPerformances);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;

    return result;

    function playFor(aPerformances) {
      return plays[aPerformances.playID];
    }
  }
}

function createPerformanceCalculator(aPerformances, aPlay) {
  // return new PerformanceCalculator(aPerformances, aPlay)
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformances, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformances, aPlay);
    default:
      throw new Error(`unknown type: ${this.play.type}`);
  }
}
class PerformanceCalculator {
  constructor(aPerformances, aPlay) {
    this.performances = aPerformances;
    this.play = aPlay;
  }
  get amount() {
    throw new Error('subclass responsibility!')
  }
  get volumeCredits() {
    let result = 0;
    result += Math.max(this.performances.audience - 30, 0);
    if ('comedy' === this.play.type)
      result += Math.floor(this.performances.audience / 5);
    return result;
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performances.audience > 30) {
      result += 1000 * (this.performances.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performances.audience > 20) {
      result += 10000 + 500 * (this.performances.audience - 20);
    }
    return result;
  }
}

module.exports = createStatementData;
