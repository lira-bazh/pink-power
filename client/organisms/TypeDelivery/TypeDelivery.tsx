import React from 'react'
import { RadioButton } from "atoms";

export const TypeDelivery = () => {
  const [ delivery, setDelivery ] = React.useState<string>("courier");
  const onChange = (value: string) => setDelivery(value)
  return (
    <div>
      <label>
        <RadioButton name="courier" value={delivery} onChange={onChange} />
      </label>
      <label>
        <RadioButton name="pickup point" value={delivery} onChange={onChange} />
      </label>
    </div>
  );
}
