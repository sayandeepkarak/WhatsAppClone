import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./view/auth";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/authentication" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
