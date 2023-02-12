import React, { type FC } from "react";
import "./style.scss";

type PropTypes = {
  value: string | number;
  type: "number" | "text";
};

export const Input: FC<PropTypes> = ({ value, type }) => {
  return <input className="round-input" type={type} value={value} />;
};
