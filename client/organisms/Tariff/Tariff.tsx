import React from "react";
import { TariffLabel, TransparentNumbers } from "atoms";
import "./style.scss";

export const Tariff = () => {
  const infinity: JSX.Element = (
    <svg
      width="110"
      height="49"
      viewBox="0 0 110 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.0625 10.3125C16.5963 10.3125 10.3125 16.5963 10.3125 24.0625C10.3125 31.5287 16.5963 37.8125 24.0625 37.8125C27.6719 37.8125 31.7762 36.135 36.6094 32.8144C40.1156 30.4081 43.6562 27.3831 47.3413 24.0625C43.6562 20.7419 40.1088 17.7238 36.6163 15.3106C31.7694 11.99 27.6719 10.3125 24.0625 10.3125ZM55 17.0775C50.9437 13.4131 46.7225 9.74875 42.4531 6.81313C36.9738 3.04563 30.7656 0 24.0625 0C10.9037 0 0 10.9037 0 24.0625C0 37.2213 10.9037 48.125 24.0625 48.125C30.7656 48.125 36.9738 45.0725 42.4531 41.3119C46.7225 38.3763 50.9437 34.7119 55 31.0475C59.0563 34.7119 63.2775 38.3763 67.5469 41.3119C73.0263 45.0725 79.2344 48.125 85.9375 48.125C99.0963 48.125 110 37.2213 110 24.0625C110 10.9037 99.0963 0 85.9375 0C79.2344 0 73.0263 3.04563 67.5469 6.81313C63.2775 9.74875 59.0563 13.4131 55 17.0775ZM62.6588 24.0625C66.3438 27.3831 69.8913 30.4012 73.3838 32.8144C78.2238 36.135 82.3213 37.8125 85.9375 37.8125C93.4037 37.8125 99.6875 31.5287 99.6875 24.0625C99.6875 16.5963 93.4037 10.3125 85.9375 10.3125C82.3281 10.3125 78.2237 11.99 73.3906 15.3106C69.8844 17.7169 66.3438 20.7419 62.6588 24.0625Z"
      />
    </svg>
  );

  return (
    <div className="tariff">
      <div className="tariff__line-1">
        <TariffLabel title="744,13" sign="₽ на 30 дней" bold={false} />
      </div>
      <TransparentNumbers align="right" value={276} />
      <div className="tariff__minutes">
        <TariffLabel title="277" sign="МИН" bold={true} />
        <TransparentNumbers align="left" value={278} />
      </div>
      <TransparentNumbers align="right" value={50} />
      <TariffLabel title={infinity} sign="ГБ" bold={true} />
    </div>
  );
};
