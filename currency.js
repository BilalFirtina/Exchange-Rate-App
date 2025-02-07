class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8K06s9qGoE3hRC7wCvpJ6phcRDX7bvuNgA5jg1P3&base_currency=";
  }
  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const exchangedResult = amount * result.data[secondCurrency];
    return exchangedResult;
  }
}
