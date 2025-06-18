import React from "react";

const Amount = ({ amount, amountChange }) => {
  const handleChange = (e) => {
    amountChange(e.target.value);
  };
  return (
    <div className="flex-col gap-1.5">
      <h2>Montant</h2>
      <input
        name="amount"
        type="number"
        min={0}
        value={amount}
        className="p-2.5 text-lg border border-gray-500 rounded-lg w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default Amount;
