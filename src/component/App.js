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
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
    setHistory([...history, `${result.total}`]); // Add to history
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`component-app ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
      <History history={history} />
      <Display value={next || total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}
