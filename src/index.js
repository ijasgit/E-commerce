import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Newcart from "./NewCart";
import { Provider } from "react-redux";
import { store } from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="https://ijasgit.github.io/E-commerce/" element={<Login />}></Route>
        <Route path="app" element={<App />}></Route>
        <Route path="cart" element={<Newcart />}></Route>
        <Route path="*" element={<h1>not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
