import React, { useState, useEffect } from "react";
import { Symbol, SYMBOL_AMOUNT } from "../../atoms";
import "./style.scss";

export const RandomSymbol = () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * SYMBOL_AMOUNT);
  }

  const [symbol, setSymbol] = useState<number>(getRandomNumber());

  const setRandomSymbol = () => {
    setSymbol(getRandomNumber())
  };

  useEffect(() => {
    setInterval(setRandomSymbol, 1000);
  }, [])

  return <Symbol type={symbol} height={110}/>;
}
