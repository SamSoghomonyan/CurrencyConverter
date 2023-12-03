import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import CurrencyConverter from "./Components/CurrencyConverter";

function App() {
  const [rates, setRates] = useState({});
  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest")
      .then((res) => res.json())
      .then((res) => setRates(res.rates));
  }, []);
  return (
    <div>
      <Header rates={rates} />
      <CurrencyConverter />
    </div>
  );
}

export default App;
