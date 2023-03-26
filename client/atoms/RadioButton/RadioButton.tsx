import React from 'react'
import "./style.scss";

type PropsType = {
  name: string;
  value: string;
  onChange: (value: string) => void
};

export const RadioButton = ({ name, value, onChange }) => {
  return (
    <>
      <input
        type="radio"
        checked={name === value}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      <div className="radio-button"></div>
    </>
  );
};
