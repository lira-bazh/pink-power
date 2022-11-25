import React, { FC, ReactNode } from 'react'
import { Link } from "react-router-dom";
import "./style.scss"

type PropsType = {
  to: string;
  title: string;
};

export const CloudLink: FC<PropsType> = (props) => {
  const styles = ['cloud-link']

  switch(props.title.length) {
    case 7: {
      styles.push('cloud-link_length-7')
      break
    }
    case 8: {
      styles.push('cloud-link_length-8')
      break
    }
    case 9: {
      styles.push('cloud-link_length-9')
      break
    }
    default: {
      styles.push('cloud-link_length-10')
      break
    }
  }

  return (
    <div className={styles.join(" ")}><Link to={props.to}>{props.title}</Link></div>
  )
}
