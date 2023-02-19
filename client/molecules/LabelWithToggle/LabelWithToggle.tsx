import React, { type FC } from "react";
import { ToggleSwitch } from "atoms";
import "./style.scss";

type Props = {
  title: string
  defaultValue: boolean;
};

export const LabelWithToggle: FC<Props> = ({ title, defaultValue }) => {
  return (
    <label className="label-toggle">
      <ToggleSwitch defaultValue={defaultValue} />
      {title}
    </label>
  );
};
