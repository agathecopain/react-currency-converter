import { useEffect, useState } from "react";
import "./App.css";
import CurrencyList from "./components/CurrencyList";
import Amount from "./components/Amount";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  //fonction qui récupère les taux de change
  useEffect(() => {
    fetch("https://grippy.learn.pierre-godino.com/api/mock/react-converter")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrencies(Object.values(data.rates));
      })
      .catch((error) => {
        console.error(
          `Il y a une erreur lors du chargement des taux de change`,
          error
        );
      });
  }, []);

  console.log(currencies);

  const filteredCurrencies = [...currencies].filter((el) =>
    el.description.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className="flex-col justify-start bg-white text-left mx-auto rounded-lg p-8 min-h-screen space-y-8 max-w-3xl sm:mt-4 sm:mb-4 sm:space-y-12 overflow-y-auto">
        <div className="w-full h-fit">
          <h1 className="text-4xl font-bold text-blue-950">
            Convertisseur de devises
          </h1>
          <p className="text-gray-500">Devise d'origine : Euro (€)</p>
        </div>
        <Amount amount={amount} amountChange={setAmount} />
        <Search
          search={searchText}
          onSearch={setSearchText}
          data={currencies}
        />
        <CurrencyList
          data={filteredCurrencies}
          onSelect={setSelectedCurrency}
          selected={selectedCurrency}
        />
        <Result currencyName={selectedCurrency} amount={amount} />
      </div>
    </>
  );
}

export default App;
