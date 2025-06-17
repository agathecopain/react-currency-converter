import React from "react";

const Amount = ({ amount, amountChange }) => {
  const handleChange = (e) => {
    amountChange(e.target.value);
  };
  return (
    <div className="grid gap-2">
      <h2>Montant</h2>
      <input
        name="amount"
        type="number"
        min={0}
        value={amount}
        className="p-2.5 text-lg border border-gray-500 rounded-lg"
        onChange={handleChange}
      />
    </div>
  );
};

export default Amount;
