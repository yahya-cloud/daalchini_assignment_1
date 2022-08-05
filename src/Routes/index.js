import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ProductScreen,
  CheckoutScreen,
  CartScreen,
  LoginScreen,
  OrderPlacedScreen,
} from "../screens";

const RoutingContainer = () => {
  return (
    <Box sx={{ padding: "2rem", mb: { xs: "5rem" } }}>
      <Routes>
        <Route path="/" element={<ProductScreen />} />{" "}
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/orderPlaced" element={<OrderPlacedScreen />} />
      </Routes>
    </Box>
  );
};

export default RoutingContainer;
