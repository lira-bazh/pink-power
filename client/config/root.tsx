import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Main } from "../containers"
import './root.scss'

const Root = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Root;
