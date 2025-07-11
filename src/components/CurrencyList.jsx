import React from "react";

const CurrencyList = ({ data, selected, onSelect }) => {
  return (
    <div className="flex-col gap-1.5">
      <h2>Sélectionner une devise</h2>
      <ul className="max-h-46 overflow-y-auto border rounded-md w-full">
        {data.map((item) => (
          <li
            key={item.code}
            value={selected}
            onClick={() => onSelect(item)}
            className={`cursor-pointer text-lg border-b p-1 ${
              selected?.code === item.code ? "bg-blue-200" : ""
            }`}
          >
            {item.description} ({item.code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
