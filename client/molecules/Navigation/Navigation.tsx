import React from 'react'
import { Link } from "react-router-dom";
import { SandwichIcon } from "atoms";
import links from './navigation.json'
import type { LinkType } from '../../templates/Layout/types'
import "./style.scss";

export const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation-link'>
        {links.map((link: LinkType) => {
          return <Link key={link.key} to={link.link}>{link.title}</Link>;
        })}
      </div>
      <SandwichIcon />
    </div>
  )
}
