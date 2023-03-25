import React from 'react'
import { RadioButton } from "atoms";
import "./style.scss";

export const TypeDelivery = () => {
  const [ delivery, setDelivery ] = React.useState<string>("courier");
  const onChange = (value: string) => setDelivery(value)
  return (
    <div className="choice-delivery">
      <label>
        <div className="delivery-title">
          <RadioButton name="courier" value={delivery} onChange={onChange} />
          <div className="delivery-title__text">Доставка курьером</div>
        </div>
        <div className="delivery-description">
          Доставка только в пределах города
        </div>
      </label>
      <label>
        <div className="delivery-title">
          <RadioButton
            name="pickup point"
            value={delivery}
            onChange={onChange}
          />
          <div className="delivery-title__text">Пункт выдачи</div>
        </div>
        <div className="delivery-description">
          Забрать можно в течении 3-х дней, бесплатно
        </div>
      </label>
    </div>
  );
}
