import { useEffect, useState } from "react";
import "./App.css";
import CurrencyList from "./components/CurrencyList";
import Amount from "./components/Amount";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [currency, setCurrency] = useState([]);
  //fonction qui récupère les taux de change
  useEffect(() => {
    fetch("https://grippy.learn.pierre-godino.com/api/mock/react-converter")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrency(Object.values(data.rates));
      })
      .catch((error) => {
        console.error(
          `Il y a une erreur lors du chargement des taux de change`,
          error
        );
      });
  }, []);

  console.log(currency);

  const [amount, setAmount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filteredCurrency, setFilteredCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setFilteredCurrency(currency);
  }, [currency]);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 justify-start bg-white w-2xl min-h-full text-left mx-auto rounded-lg mt-5 p-8">
        <div className="">
          <h1 className="text-4xl font-bold text-blue-950">
            Convertisseur de devises
          </h1>
          <p className="text-gray-500">Devise d'origine : Euro (€)</p>
        </div>
        <Amount amount={amount} amountChange={setAmount} />
        <Search
          search={searchText}
          onSearch={setSearchText}
          data={currency}
          onFiltered={setFilteredCurrency}
        />
        <CurrencyList
          data={filteredCurrency}
          onSelect={setSelectedCurrency}
          selected={selectedCurrency}
        />
        <Result
          convertion={result}
          currencyName={selectedCurrency}
          onConvert={setResult}
          amount={amount}
        />
      </div>
    </>
  );
}

export default App;
