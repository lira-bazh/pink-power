import React from "react";
import "./style.scss";

export const TransparentNumbers = ({ align, value }) => {
  const numbers = new Array(10).fill(0).map((item, index) => value - (align === 'right'? 1 : -1)*index);
  if (align === "right") numbers.reverse()

  const styleContent: React.CSSProperties = {};
  styleContent.justifyContent = align === "right" ? "flex-end" : "flex-start";
  if (align === "right") {
    styleContent.paddingRight = "27px";
  }
  else {
    styleContent.paddingLeft = "27px";
  }

  const styleOverlay: React.CSSProperties = {
    background: `linear-gradient(${align === 'right'? '-': ''}90deg, rgba(256,256,256,0), rgba(256,256,256,1))`
  };

  return (
    <div className="transparent-numbers">
      <div className="transparent-numbers__content" style={styleContent}>
        {numbers.map((num) => (
          <div>{num}</div>
        ))}
      </div>
      <div className="transparent-numbers__overlay" style={styleOverlay}></div>
    </div>
  );
};
