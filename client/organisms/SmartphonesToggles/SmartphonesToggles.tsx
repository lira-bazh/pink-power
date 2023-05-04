import React from 'react'
import { LabelWithToggle } from "molecules";
import "./style.scss";

export const SmartphonesToggles = () => {
  const getLabel = (text: string, price: number): JSX.Element => {
    return (
      <div className="smartphones-toggles__label">
        <div>{text}</div>
        <div className="smartphones-toggles__price">+ {price}₽</div>
      </div>
    );
  }


  return (
    <div className="smartphones-toggles">
      <LabelWithToggle
        title={getLabel("Безлимитный интернет", 100)}
        defaultValue={true}
      />
      <LabelWithToggle
        title={getLabel("Безлимитные SMS", 50)}
        defaultValue={false}
      />
      <LabelWithToggle
        title={getLabel("Раздача интернета на другие устройства", 100)}
        defaultValue={false}
      />
      <LabelWithToggle
        title={getLabel("PINK POWER", 289)}
        defaultValue={true}
      />
    </div>
  );
};
