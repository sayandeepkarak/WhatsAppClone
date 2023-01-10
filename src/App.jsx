import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./view/auth";
import "./App.css";
import LoaderScreen from "./components/Loader";
import Home from "./view/home";

const App = () => {
  const render = useRef(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!render.current) return;
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    render.current = false;
  }, []);

  return (
    <>
      {load ? (
        <LoaderScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authentication" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
