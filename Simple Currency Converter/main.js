let input = require('sync-input');

let currencies = new Map();
currencies.set("USD", 1);
currencies.set("JPY", 113.5);
currencies.set("EUR", 0.89);
currencies.set("RUB", 74.36);
currencies.set("GBP", 0.75);

console.log("Welcome to Currency Converter!");
printCurrencies();

let toDo = getToDo();

while (toDo === 1) {
  let fromCurrency = getFromCurrency();
  let toCurrency = getToCurrency();
  let amount = getAmount();

  console.log(`Result: ${amount} ${fromCurrency} equals ${calculateNewCurrency(amount, fromCurrency, toCurrency)} ${toCurrency}`);
}
console.log("Have a nice day!");


function printCurrencies() {
  currencies.forEach((val, curr) => {
    console.log(`1 USD equals ${val} ${curr}`);
  })
}

function isCurrencyExists(currency) {
  if (!currencies.has(currency)) {
    console.log("Unknown currency");
    return false;
  }
  return true;
}

function isAmountCorrect(num) {
  if (Number.isNaN(num)) {
    console.log("The amount has to be a number");
    return false;
  } else if (num < 1) {
    console.log("The amount cannot be less than 1");
    return false;
  }
  return true;
}

function isToDoCorrect(todo) {
  if (Number.isNaN(todo) || todo < 1 || todo > 2) {
    console.log("Unknown input");
    return false;
  }
  return true;
}

function getToDo() {
  let toDo;
  do {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    toDo = Number(input());
  } while (!isToDoCorrect(toDo));
  return toDo
}

function getFromCurrency() {
  let fromCurrency;
  do {
    console.log("What do you want to convert?");
    fromCurrency = input("From:").toUpperCase();
  } while (!isCurrencyExists(fromCurrency))
  return fromCurrency;
}

function getToCurrency() {
  let toCurrency;
  do {
    toCurrency = input("To:").toUpperCase();
  } while (!isCurrencyExists(toCurrency))
  return toCurrency;
}

function getAmount() {
  let amount;
  do {
    amount = Number(input("Amount:"));
  } while (!isAmountCorrect(amount))
  return amount;
}

function calculateNewCurrency(amount, fromCurrency, toCurrency) {
  return (
    amount / currencies.get(fromCurrency) * currencies.get(toCurrency)
  ).toFixed(4);
}