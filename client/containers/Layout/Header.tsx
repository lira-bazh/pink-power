import React from 'react'
import { Location } from './Location'
import { Navigation } from './Navigation'
import "./style.scss";

export const Header = () => {
  return (
    <header>
      <Location />
      <Navigation/><div>Меню</div>
    </header>
  );
}
