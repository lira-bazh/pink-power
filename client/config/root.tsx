import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../templates";
import { Main } from "../pages";
import './root.scss'

const Root = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Root;
