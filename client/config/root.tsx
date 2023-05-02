import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, LayoutBackground } from "../templates";
import { Main, Order, ConfirmationOrder, Smartphones } from "../pages";
import './root.scss'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout background={LayoutBackground.SPOT} />}>
          <Route index element={<Main />} />
        </Route>
        <Route
          path="/*"
          element={<Layout background={LayoutBackground.WHITE} />}
        >
          <Route path="order" index element={<Order />} />
          <Route
            path="confirmation-order"
            index
            element={<ConfirmationOrder />}
          />
          <Route path="smartphones" index element={<Smartphones />} />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
