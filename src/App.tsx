import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import GoodsPage from "./pages/GoodsPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<GoodsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
