const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange)
  firstOption.addEventListener("change", exchange)
  secondOption.addEventListener("change", exchange)
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.value;
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
  currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then(data => resultInput.value = data.toFixed(3))
}