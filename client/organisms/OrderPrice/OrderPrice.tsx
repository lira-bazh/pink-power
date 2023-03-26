import React from 'react'
import { Button, BUTTON_STYLE } from "atoms";
import { NumberPorting } from "../../molecules";
import "./style.scss";

export const OrderPrice = () => {
  return (
    <div className="order-price">
      <div className="order-content-title">Ваш заказ</div>
      <div className="order-price__list">
        <div className="order-price-item">SIM-карта для смартфона</div>
      </div>
      <div className="order-price__decription">
        Деньги будут зачислены на ваш счет.
        <br />
        Оплата картой или наличными при получении.
      </div>
      <div>
        <NumberPorting />
      </div>
      <div className="order-price__services">
        <div>Пренос номера</div>
        <div>PINK POWER</div>
      </div>
      <Button
        style={BUTTON_STYLE.PINK}
        title="Оформить заказ"
        redirect="/confirmation-order"
      />
      <div className="order-price__agreement">
        Нажимая кнопку, вы подтверждаете, что ознакомлены с информацией о товаре
        и даете согласие на обработку своих персональных данных.
      </div>
      <div className="order-price__conditions">Условия получения заказа</div>
    </div>
  );
}
