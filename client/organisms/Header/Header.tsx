import React from 'react'
import { PinkLogo } from 'atoms';
import { Location, Menu, Navigation } from 'molecules';
import "./style.scss";

export const Header = () => {
  return (
    <header>
      <PinkLogo/>
      <Location />
      <Navigation/>
      <Menu/>
    </header>
  );
}
