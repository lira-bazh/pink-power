import React from 'react'
import { ArrowDownIcon } from 'atoms';
import "./style.scss";

export const Location = () => {
  return (
    <div className="location">
      <div className="location__select-text">Башкортостан Респ</div>
      <ArrowDownIcon />
    </div>
  );
}
