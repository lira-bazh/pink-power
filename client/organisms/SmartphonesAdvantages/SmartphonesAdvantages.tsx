import React from 'react'
import { SymbolAndText, Symbol } from "atoms";
import "./style.scss";

export const SmartphonesAdvantages = () => {
  return (
    <div className="smartphones-advantages">
      <SymbolAndText symbol={1} text="Безлимитный интернет" />
      <SymbolAndText symbol={22} text="Единая цена дома и в поездках по Росcии" />
      <SymbolAndText symbol={9} text="Звонки на все номера Росcии без доплат" />
      <SymbolAndText symbol={6} text="Бесплатные звонки Pink - Pink" />
      <SymbolAndText
        symbol={11}
        text="Минуты, Гб и приложения за счет покупок"
      />
    </div>
  );
}
