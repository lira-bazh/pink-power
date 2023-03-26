import React from 'react'
import { Input } from "atoms";
import { LabelWithToggle } from "molecules";
import { TypeDelivery } from "..";
import "./style.scss";

export const OrderSettings = () => {
  return (
    <div className="order-settings">
      <div className="order-content-title">Данные получателя</div>
      <div className="order-settings-inputs">
        <Input type="text" defaultValue="Уфа ( Респ.Башкортостан)" />
        <Input type="text" defaultValue="+7" />
      </div>
      <div className="order-settings-checkboxes">
        <LabelWithToggle
          title="Перейти в PINK со своим номером"
          defaultValue={true}
        />
        <LabelWithToggle
          title="Подключить услугу PINK POWER"
          defaultValue={true}
        />
      </div>
      <div className="order-content-title">Выберите способ получения</div>
      <div>
        <TypeDelivery />
      </div>
    </div>
  );
}
