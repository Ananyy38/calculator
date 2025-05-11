import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import History from "./History";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [history, setHistory] = useState([]);

  const handleClick = buttonName => {
    const { total, next, operation } = calculate({ total, next, operation }, buttonName);
    setTotal(total);
    setNext(next);
    setOperation(operation);

    let calculationString = "";
    if (total !== null) calculationString += total;
    if (operation !== null) calculationString += ` ${operation} `;
    if (next !== null) calculationString += next;

    if (calculationString.length > 0) {
      setHistory([...history, calculationString]);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className={`component-app ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
      <History history={history} onClearHistory={clearHistory} />
      <Display value={next || total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}
