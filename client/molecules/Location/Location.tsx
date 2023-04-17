import React from 'react'
import { ArrowDownIcon, Selector } from "atoms";
import regions from '../../data/regions.json'
import "./style.scss";

export const Location = () => {
  return (
    <div className="location">
      <Selector options={regions} />
    </div>
  );
}
