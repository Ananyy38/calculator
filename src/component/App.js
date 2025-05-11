import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import History from "./History";

export default function App() {
  // ... (rest of the code remains the same)

  const handleClick = buttonName => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);

    let calculationString = "";
    if (result.total !== null) calculationString += result.total;
    if (result.operation !== null) calculationString += ` ${result.operation} `;
    if (result.next !== null) calculationString += result.next;
    if (result.total !== null && result.next === null && result.operation === null) {
      calculationString += ` = ${result.total}`;
    }

    if (calculationString.length > 0) {
      setHistory([...history, calculationString]);
    }
  };

  // ... (rest of the code remains the same)
}
