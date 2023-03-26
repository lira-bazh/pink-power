import React, { useState } from 'react'
import { Counter } from '../../atoms'
import "./style.scss";

export const NumberPorting = () => {
  const [counter, setCounter] = useState<number>(1)
  return (
    <div className="porting">
      <Counter value={counter} onChange={setCounter} />
      <div className="porting__price">{counter * 300}₽ </div>
    </div>
  );
}
