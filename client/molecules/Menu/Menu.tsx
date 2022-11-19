import React from 'react'
import { ProfileIcon, SandwichIcon } from "atoms";
import "./style.scss"

export const Menu = () => {
  return (
    <div className="menu">
      <ProfileIcon />
      <SandwichIcon />
    </div>
  );
}
