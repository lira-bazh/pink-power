import React from 'react'
import { Link } from "react-router-dom";
import links from './navigation.json'
import type { LinkType } from '../../templates/Layout/types'
import "./style.scss";

export const Navigation = () => {
  return (
    <div className='navigation'>
        {links.map((link: LinkType) => {
          return <Link key={link.key} to={link.link}>{link.title}</Link>;
        })}
    </div>
  )
}