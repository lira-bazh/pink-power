import React, { FC } from 'react'
import "./style.scss";

type PropsType = {
  title: string | number | JSX.Element;
  sign: string;
  bold: boolean;
};

export const TariffLabel: FC<PropsType> = ({ title, sign, bold }) => {
  const classNames: string[] = ["tariff-label"];
  if (bold) classNames.push("tariff-label_bold");
  return (
    <div className={classNames.join(' ')}>
      <div className="tariff-label__title">{title}</div>
      <div className="tariff-label__sign">{sign}</div>
    </div>
  );
};
