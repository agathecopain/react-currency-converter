import React, { useEffect } from "react";

const Result = ({ convertion, onConvert, amount, currencyName }) => {
  useEffect(() => {
    const rate = currencyName?.rate;
    const result = amount * rate;
    onConvert(result.toFixed(2));
  }, [amount, currencyName]);

  return (
    <div className="grid gap-2 text-center bg-blue-100 rounded-lg p-4 border border-violet-300">
      {amount && currencyName ? (
        <p className="text-4xl text-blue-800">{convertion}</p>
      ) : (
        <p className="text-4xl text-blue-800">--</p>
      )}
      {currencyName && <p className=" text-blue-800">{currencyName?.description}</p> }
    </div>
  );
};

export default Result;
