import React from 'react'
import { Location, Menu, Navigation } from 'molecules';
import "./style.scss";

export const Header = () => {
  return (
    <header>
      <Location />
      <Navigation/>
      <Menu/>
    </header>
  );
}
