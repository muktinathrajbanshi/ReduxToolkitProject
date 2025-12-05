import React, { useState } from 'react'

const App = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <hr />
        <div>
          <label>
            Amount:
            <input 
            type="text" 
            value={amount} onChange={(e) => setAmount(e.target.value)} 
            />
          </label>
        </div>
        <section className="currency-selector">
          <label>
          From:
          <select 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)}
          >
          {["USD", "EUR", "NPR", "GBP", "AUD"].map((currency) => {
            return (
              <option key={currency} value={currency}>
            {currency}
            </option>
            );
          })}
          </select>
          </label>
          <label>
          To:
          <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          >
          {["NPR", "USD", "EUR", "GBP", "AUD"].map((currency) => {
            return (
              <option key={currency} value={currency}>
            {currency}
            </option>
            );
          })}
          </select>
          </label>
        </section>
        <button disabled={isLoading || amount <= 0}>{isLoading ? "converting.." : "convert"}</button>
      </div>
    </section>
  )
};

export default App;
