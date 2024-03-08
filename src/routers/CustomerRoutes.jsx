import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customers/pages/homepage/Homepage";
import Restaurant from "../customers/pages/Restaurant/Restaurant";
import Navbar from "../customers/components/Navbar/Navbar";
import Cart from "../customers/pages/Cart/Cart";

export const CustomerRoutes = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restraunt/:city/:title/:id" element={<Restaurant />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
