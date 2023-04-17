import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "..";
import "./style.scss";

export const Selector = ({ options }) => {
  const [showOptionList, setShowOptionList] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<boolean>(options[0]);

  return (
    <div className="custom-selector">
      <div className="custom-selector__select">
        <div className="custom-selector__text">{selectItem}</div>
        <div
          className="custom-selector__arrow"
          onClick={() => setShowOptionList(!showOptionList)}
          onTouchStart={() => setShowOptionList(!showOptionList)}
        >
          {showOptionList ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>
      <div
        className={`custom-selector__dropdown ${
          !showOptionList ? "custom-selector__hide" : ""
        }`}
        onMouseLeave={() => setShowOptionList(false)}
      >
        <ul>
          {options.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setSelectItem(item);
                  setShowOptionList(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
