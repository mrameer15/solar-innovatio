import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./sass/App.css";
import { Header, Footer, ScrollToTopButton } from "./components/index";
import { memo } from "react";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default memo(App);
