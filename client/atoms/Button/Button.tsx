import React, { FC } from 'react'
import "./style.scss"

export enum BUTTON_STYLE {
  PINK = 'pink',
  WHITE = 'white'
}

type PropTypes = {
  title: string;
  style: BUTTON_STYLE;
}

export const Button: FC<PropTypes> = (props) => {
  return (
    <button className={props.style}>{props.title}</button>
  )
}
