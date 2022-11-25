import React, { FC } from 'react'
import "./style.scss"

type PropTypes = {
  title: string;
}

export const Button: FC<PropTypes> = (props) => {
  return (
    <button>{props.title}</button>
  )
}
