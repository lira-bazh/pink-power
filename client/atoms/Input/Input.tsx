import React, { type FC } from "react";
import "./style.scss";

type PropTypes = {
  defaultValue: string | number;
  type: "number" | "text";
};

export const Input: FC<PropTypes> = ({ defaultValue, type }) => {
  return <input className="round-input" type={type} defaultValue={defaultValue} />;
};
