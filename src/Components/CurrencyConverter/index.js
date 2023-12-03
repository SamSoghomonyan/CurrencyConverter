import React, { useState } from "react";
import "./style.css";
const CurrencyConverter = () => {
  const [currency1, setCurrency1] = useState("UAH");
  const [currency2, setCurrency2] = useState("USD");
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(0);

  const currencies = ["UAH", "USD", "EUR"];

  const handleAmount1Change = (e) => {
    const value = parseFloat(e.target.value);
    setAmount1(value);
    setAmount2(value * getExchangeRate(currency1, currency2));
  };

  const handleAmount2Change = (e) => {
    const value = parseFloat(e.target.value);
    setAmount2(value);
    setAmount1(value * getExchangeRate(currency2, currency1));
  };

  const handleCurrency1Change = (e) => {
    const value = e.target.value;
    setCurrency1(value);
    setAmount2(amount1 * getExchangeRate(value, currency2));
  };

  const handleCurrency2Change = (e) => {
    const value = e.target.value;
    setCurrency2(value);
    setAmount2(amount1 * getExchangeRate(currency1, value));
  };

  const getExchangeRate = (fromCurrency, toCurrency) => {
    const exchangeRates = {
      UAH: { USD: 0.027, EUR: 0.025 },
      USD: { UAH: 36.450835, EUR: 0.919028 },
      EUR: { UAH: 39.65, USD: 1.09 },
    };

    return exchangeRates[fromCurrency][toCurrency];
  };

  return (
    <div className="conversion">
      <div>
        <select
          className="select"
          value={currency1}
          onChange={handleCurrency1Change}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="number"
          value={amount1}
          onChange={handleAmount1Change}
        />
      </div>
      <div>
        <select
          className="select"
          value={currency2}
          onChange={handleCurrency2Change}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="number"
          value={amount2}
          onChange={handleAmount2Change}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
