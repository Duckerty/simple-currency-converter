const input = require('sync-input');

function greetings() {
  console.log("Welcome to Currency Converter!");
}

let currencies = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75
}
let currencyName = Object.keys(currencies);
let currencyValue = Object.values(currencies);

function showCurrencies() {
  for(let i = 0; i < Object.keys(currencies).length; i++){
    console.log(`1 USD equals  ${currencyValue[i]} ${currencyName[i]}`);
  }
}

function currencyConvert() {
  console.log("What do you want to convert?");
  let fromConvert = input("From: ").toUpperCase();
  if (currencyName.includes(fromConvert)) {
    let toConvert = input("To: ").toUpperCase();
    if (currencyName.includes(toConvert)) {
      let amountOfCurrency = Number(input("Amount: "));
      if (!isNaN(amountOfCurrency) && typeof amountOfCurrency === 'number') {
        if (amountOfCurrency >= 1) {
          let needToConvert = currencies[fromConvert];
          let convertTo = currencies[toConvert];
          let result = function() {
            return ((1 / needToConvert) * convertTo * amountOfCurrency).toFixed(4);
          };
          console.log(`Result: ${amountOfCurrency} ${fromConvert} equals ${result()}  ${toConvert}`);
        } else {
            console.log("The amount can not be less than 1");
        }
      } else {
        console.log("The amount has to be a number");
      }
    } else {
        console.log("Unknown currency");
    }
  } else {
      console.log("Unknown currency");
  }
}

greetings();
showCurrencies();
currencyConvert();