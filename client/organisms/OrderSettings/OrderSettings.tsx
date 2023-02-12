import React from 'react'
import { Input, ToggleSwitch } from "atoms";
import "./style.scss";

export const OrderSettings = () => {
  return (
    <div className="order-settings">
      <div className="order-settings-title">Данные получателя</div>
      <div className="order-settings-inputs">
        <Input type="text" value="Уфа ( Респ.Башкортостан)" />
        <Input type="text" value="+7" />
      </div>
      <div>
        <ToggleSwitch
          title="Перейти в PINK со своим номером"
          defaultValue={true}
        />
      </div>
    </div>
  );
}
