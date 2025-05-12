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
    const result = calculate({ total, next, operation }, buttonName);

    // Merge only the keys that calculate() returned:
    setTotal(result.total !== undefined ? result.total : total);
    setNext(result.next !== undefined ? result.next : next);
    setOperation(result.operation !== undefined ? result.operation : operation);

    // Build a human-readable string for history
    let calculationString = "";
    const finalTotal = result.total !== undefined ? result.total : total;
    const finalOp =
      result.operation !== undefined ? result.operation : operation;
    const finalNext = result.next !== undefined ? result.next : next;

    if (finalTotal !== null) calculationString += finalTotal;
    if (finalOp !== null) calculationString += ` ${finalOp} `;
    if (finalNext !== null) calculationString += finalNext;
    // If an evaluation just completed, append the equals sign
    if (
      result.total !== undefined &&
      (result.next === null || result.next === undefined) &&
      (result.operation === null || result.operation === undefined)
    ) {
      calculationString += ` = ${finalTotal}`;
    }

    if (calculationString.length > 0) {
      setHistory(prevHist => [...prevHist, calculationString]);
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
