import React from "react";
import { SymbolsLine, RandomSymbol } from "molecules";
import "./style.scss";

export const ConfirmationOrder = () => {
  return (
    <div className="confirmation-page">
      {/* <SymbolsLine /> */}
      <div className="confirmation-page__wrapper">
        <div className="confirmation-page__content">
          <div className="confirmation-page__title">
            Большое спасибо за ваш заказ )
          </div>
          <RandomSymbol/>
          <div className="confirmation-page__message">
            В течении дня с вами свяжется наш сотрудник для согласования вашего
            заказа и доставки.
          </div>
        </div>
      </div>
    </div>
  );
};
