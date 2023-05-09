import React from 'react'
import { Symbol } from "atoms";
import "./style.scss";

export const SymbolAndText = ({symbol, text}) => {
  return (
    <div className="symbol-and-text">
      <Symbol type={symbol} />
      <div className="symbol-and-text__text">{text}</div>
    </div>
  );
}
