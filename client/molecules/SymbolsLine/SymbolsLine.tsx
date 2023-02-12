import React from "react";
import { Symbol, SYMBOL_AMOUNT } from "atoms";
import "./style.scss";

export const SymbolsLine = () => {
  const [offset, setOffset] = React.useState<number>(0);

  const getRandomNum = (): number => Math.round(Math.random() * SYMBOL_AMOUNT);
  const getKeys = () => {
    const randomNums: number[] = new Array(50)
      .fill(0)
      .map(() => getRandomNum());
    for (let i in randomNums) {
      if (+i > 0 && randomNums[+i] === randomNums[+i - 1]) {
        randomNums[+i] = getRandomNum();
      }
    }
    return randomNums;
  }
  const [keys, setKeys] = React.useState<number[]>(getKeys());

  let timerId = setTimeout(setOffset, 1, offset > 100 ? 0 : offset + 0.02);

  return (
    <div className="line">
      <div
        className="line-offset"
        style={{ transform: `translateX(-${offset}%)` }}
      >
        {keys.map((num, index) => (
          <Symbol key={index} type={num} />
        ))}
      </div>
      <div className="line-gradient"></div>
    </div>
  );
};
