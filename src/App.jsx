import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./view/auth";
import "./App.css";
import Home from "./view/home";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authentication" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
