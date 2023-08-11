import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Cart, Dashboard, Product, Header } from "./components";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Header />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
};

export default App;
