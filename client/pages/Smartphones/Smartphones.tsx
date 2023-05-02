import React from 'react'
import { RandomSymbol } from "molecules";
import "./style.scss";

export const Smartphones = () => {
  return (
    <div className="smartphones">
      <div className="smartphones__header">
        <div className="smartphones__title">
          <div>Pink мобильная связь</div>
          <div>
            Настрой свой PINK тариф с точностью до минуты и гигабайта и не плати
            за лишнее.
          </div>
          <RandomSymbol />
        </div>
      </div>
    </div>
  );
}
