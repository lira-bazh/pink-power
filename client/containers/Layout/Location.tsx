import React from 'react'
import "./style.scss";

export const Location = () => {
  return (
    <div className="header-location">
      <div className="header-location__select-text">Башкортостан Респ</div>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="#E01A79"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}