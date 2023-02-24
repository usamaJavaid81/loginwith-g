import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { handleGetRequest } from "./services/GetTemplate";
import Data from "./pages/Data";
import Data1 from "./pages/Data1";
import {Routes, Route, BrowserRouter } from "react-router-dom";
// import * as dotenv from 'dotenv';

function App() {
  require("dotenv").config();


  return (
    <>
      <div>hello usama</div>
      <Routes>
      <Route element={<Data1 />} path="/" />
      <Route element={<Data />} path="data" />
      <Route element={<Data />} path="data1" exact />
      </Routes>
    </>
  );
}

export default App;
