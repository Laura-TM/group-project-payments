import React, { useState } from "react";
import "./Balance.css";

function Balance(props) {
  const [alternateCurrency, setAlternateCurrency] = useState("USD");
  let initialConvertedBalance = props.rates[alternateCurrency] * props.total;
  const [convertedBalance, setConvertedBalance] = useState(initialConvertedBalance);

  function convert(selectedCurrency) {
    const conversionRate = props.rates[selectedCurrency];
    const newConvertedBalance = conversionRate * props.total;
    setAlternateCurrency(selectedCurrency);
    setConvertedBalance(newConvertedBalance);
  }

  return (
    <div className="Balance">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{props.total}</span>
      </h2>
      <div className="Balance-alt">
        Your balance is {convertedBalance.toFixed(2)} in
        <select defaultValue={alternateCurrency} onChange={(e) => convert(e.currentTarget.value)}>
          {props.currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
        .
      </div>
    </div>
  );
}

export default Balance;
