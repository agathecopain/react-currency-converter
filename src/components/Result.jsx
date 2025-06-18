const Result = ({ amount, currencyName }) => {
  const rate = currencyName?.rate;
  const result = (amount * rate).toFixed(2);

  return (
    <div className="flex-col gap-1.5 justify-center content-center text-center bg-blue-100 rounded-lg p-6 border border-violet-300 h-fit">
      {amount && currencyName ? (
        <p className="text-4xl text-blue-800">{result}</p>
      ) : (
        <p className="text-4xl text-blue-800">--</p>
      )}
      {currencyName && (
        <p className=" text-blue-800">{currencyName?.description}</p>
      )}
    </div>
  );
};

export default Result;
