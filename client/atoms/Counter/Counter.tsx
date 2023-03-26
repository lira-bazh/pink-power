import React, { FC } from "react";
import { Button } from '..';
import "./style.scss";

type PropsType = {
  value: number;
  onChange: (value: number) => void
};

export const Counter: FC<PropsType> = ({value, onChange}) => {
  return (
    <div className="counter-container">
      <button onClick={() => onChange(Math.max(value - 1, 0))}>
        <span>-</span>
      </button>
      <div className="counter-container__number">{value}</div>
      <button onClick={() => onChange(value + 1)}>
        <span>+</span>
      </button>
    </div>
  );
};
