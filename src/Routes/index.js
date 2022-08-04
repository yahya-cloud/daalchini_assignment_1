import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductScreen } from "../screens";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/LoginScreen";

const RoutingContainer = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Routes>
        <Route path="/" element={<ProductScreen />} />{" "}
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Box>
  );
};

export default RoutingContainer;
