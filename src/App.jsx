import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./view/auth";
import "./App.css";
import Home from "./view/home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
