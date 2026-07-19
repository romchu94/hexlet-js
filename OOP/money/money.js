function Money(value, currency = "usd") {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function () {
  return this.value;
};

Money.prototype.getCurrency = function () {
  return this.currency;
};

Money.prototype.exchangeTo = function (targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, this.currency);
  }
  let newValue;
  if (this.currency === "usd" && targetCurrency === "eur") {
    newValue = this.value * 0.7;
  } else if (this.currency === "eur" && targetCurrency === "usd") {
    newValue = this.value * 1.2;
  }
  return new Money(newValue, targetCurrency);
};

Money.prototype.add = function (money) {
  const convertedMoney = money.exchangeTo(this.currency);
  const totalValue = this.value + convertedMoney.getValue();
  return new Money(totalValue, this.currency);
};

Money.prototype.format = function () {
  return this.value.toLocaleString(undefined, {
    style: "currency",
    currency: this.currency,
  });
};

export default Money;
