import React from 'react'
import { Link } from "react-router-dom";
import { PinkLogo } from 'atoms';
import { Location, Menu, Navigation } from 'molecules';
import "./style.scss";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <PinkLogo />
      </Link>
      <Location />
      <Navigation />
      <Menu />
    </header>
  );
}
