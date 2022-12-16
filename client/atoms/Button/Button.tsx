import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export enum BUTTON_STYLE {
  PINK = "pink",
  WHITE = "white",
}

type PropTypes = {
  title: string;
  style: BUTTON_STYLE;
  redirect?: string;
};

export const Button: FC<PropTypes> = (props) => {
  const style: string = ["button", props.style].join(" ");
  if (props.redirect) {
    return (
      <Link to={props.redirect} className={style}>
        {props.title}
      </Link>
    );
  }
  return <button className={style}>{props.title}</button>;
};
