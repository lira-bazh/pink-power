import React, { FC, ReactNode } from 'react'
import { Header, Footer } from 'organisms'
import "./style.scss";

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = (props) => {
  return (
    <div className="main-wrapper">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
};
