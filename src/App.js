import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Conversion from "./Conversion";

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
      <Conversion />
    </div>
  );
}

export default App;
