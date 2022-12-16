import React from 'react'
import { SymbolsLine } from "molecules";
import { OrderSettings, OrderPrice } from 'organisms';
import "./style.scss";

export const Order = () => {
  return (
    <div className="order-page">
      <SymbolsLine />
      <div className="order-title">Заказ SIM-карты для смартфона</div>
      <div className="order-content">
        <OrderSettings/>
        <OrderPrice/>
      </div>
    </div>
  );
}
