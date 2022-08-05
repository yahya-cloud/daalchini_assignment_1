import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Button from "../components/Button";
import CartTable from "../components/CartTable";
import tableCols from "../data/tableCols";
import { AppContext } from "../contexts/AppContext";
import {
  filterCartProducts,
  totalOrderQty,
  totalOrderValue,
  totalQtyAmount,
} from "../libs/utils";
import { useNavigate } from "react-router-dom";

const CheckoutScreen = () => {
  const { products, resetProducts } = useContext(AppContext);
  const rows = filterCartProducts(products).map((el) => {
    let { name, price, qty } = products[el];
    return { id: el, name, price, qty, value: totalQtyAmount(qty, price) };
  });
  const navigate = useNavigate();

  const placeOrderHandler = () => {
    resetProducts();
    navigate("/orderPlaced");
  };

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Checkout
      </Typography>
      {rows.length === 0 ? (
        <Typography align="center" variant="h4">
          Please Add Products to see real UI of Checkout Screen :)
        </Typography>
      ) : (
        <Stack
          direction={{ md: "row", xs: "column" }}
          spacing={{ md: 10, xs: 6 }}
          sx={{
            mt: "5rem",
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
          }}>
          <Stack spacing={10} width={{ md: "100rem" }}>
            <Stack>
              <Typography color="#333" variant="h4">
                Pick Up
              </Typography>
              <Divider sx={{ mb: "2rem" }} />
              <Typography color="#ccc" variant="h4">
                Test, Daalchini Office Noida Uttar Pradesh
              </Typography>
            </Stack>
            <Stack>
              <Typography color="#333" variant="h4">
                Cart Details
              </Typography>
              <Divider sx={{ mb: "2rem" }} />
              <CartTable rows={rows} columns={tableCols} />
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "20rem",
              width: { md: "40rem", xs: "33rem" },
              border: "1px solid #ccc",
              borderRadius: "8px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography fontWeight={300} marginTop={"2rem"} variant="h3">
              Subtotal ({totalOrderQty(rows)}) items
            </Typography>
            <Typography fontWeight={500} marginTop={"2rem"} variant="h4">
              Total: ₹ {totalOrderValue(rows)}
            </Typography>
            <Button
              customStyles={{ width: "60%", marginTop: "3rem" }}
              onClick={placeOrderHandler}
              variant="contained"
              color="secondary"
              text="Place Order"
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default CheckoutScreen;
