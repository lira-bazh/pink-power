import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'organisms'
import { LayoutBackground } from './types'
import "./style.scss";

type PropsType = {
  background: LayoutBackground;
};

export const Layout: FC<PropsType> = ({ background }) => {
  let classes: string[] = ["layout-wrapper"];

  switch (background) {
    case LayoutBackground.SPOT: {
      classes.push("layout__spot")
      break
    }
  }

  return (
    <div className={classes.join(" ")}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
