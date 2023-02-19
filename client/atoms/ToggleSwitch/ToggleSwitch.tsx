import React, { type FC } from 'react'
import "./style.scss"

type Props = {
  defaultValue: boolean
};

export const ToggleSwitch: FC<Props> = ({ defaultValue }) => {
  return (
    <input
      className="toggle-checkbox"
      type="checkbox"
      defaultChecked={defaultValue}
    />
  );
};
