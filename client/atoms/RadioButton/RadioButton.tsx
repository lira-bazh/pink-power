import React from 'react'
import "./style.scss";

export const RadioButton = ({ name, value, onChange }) => {
  return (
    <input
      type="radio"
      checked={name === value}
      value={name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
