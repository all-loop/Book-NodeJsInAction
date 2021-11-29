// exports es un atajo para usar module.exports, por lo que node no permite
// que exports sea reasignado. En cambio, nos ofrece hacer un uso directo
// de module.exports, mejorando asi la descripción de nuestros módulos.

class Currency {
  constructor(canadianDollar) {
    this.canadianDollar = canadianDollar;
  }

  roundTwoDecimal(amount) {
    return Math.round(amount * 100) / 100;
  }

  canadianToUs(canadian) {
    return this.roundTwoDecimal(this.canadianDollar * canadian);
  }

  usToCanadian(us) {
    return this.roundTwoDecimal(us / this.canadianDollar);
  }
}

module.exports = Currency;
