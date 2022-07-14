const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapbtn = document.querySelector(".btn");

async function exchnage() {
  const currencyone = currencyOne.value;
  const currencytwo = currencyTwo.value;
  const res = await fetch(`https://open.er-api.com/v6/latest/${currencyone}`);
  const data = await res.json();
  const rate = await data.rates[currencytwo];

  rateEl.innerHTML = `1${currencyone} = ${rate}${currencytwo}`;

  amountTwo.value = (amountOne.value * rate).toFixed(2);
}

function swap() {
  [currencyOne.value, currencyTwo.value] = [
    currencyTwo.value,
    currencyOne.value,
  ];
  exchnage();
}

swapbtn.addEventListener("click", swap);

amountOne.addEventListener("input", exchnage);
currencyOne.addEventListener("change", exchnage);
currencyTwo.addEventListener("change", exchnage);
amountTwo.addEventListener("input", exchnage);

exchnage();
