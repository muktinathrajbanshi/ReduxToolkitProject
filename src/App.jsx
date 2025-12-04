import React from 'react'

const App = () => {
  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <hr />
        <div>
          <label>
            Amount:
            <input type="text" />
          </label>
        </div>
        <section className="currency-selector">
          <label>
          From:
          <select>
          {["USD", "EUR", "NPR", "GBP", "AUD"].map((currency) => {
            return <option key={currency} value="USD">USD</option>;
          })}
          </select>
          </label>
        </section>
      </div>
    </section>
  )
};

export default App;
