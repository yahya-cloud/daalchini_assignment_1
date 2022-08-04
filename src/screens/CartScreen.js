import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Product from "../components/Product";
import { AppContext } from "../contexts/AppContext";

const CartScreen = () => {
  const { products, user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Cart
      </Typography>
      <Stack
        flexWrap={"wrap"}
        direction={"row"}
        spacing={2}
        sx={{ justifyContent: "center" }}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          {Object.keys(products)
            .filter((el) => products[el].qty === 0)
            .map((el) => (
              <Product
                key={el}
                productId={el}
                qty={products[el].qty}
                name={products[el].name}
                price={products[el].price}
                link={products[el].link}
              />
            ))}
        </Stack>
        <Stack
          sx={{
            height: "20rem",
            width: "40rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography fontWeight={300} marginTop={"2rem"} variant="h3">
            Subtotal (3) items
          </Typography>
          <Typography fontWeight={500} marginTop={"2rem"} variant="h4">
            Total: ₹ 500
          </Typography>
          {user ? (
            <Button
              customStyles={{ width: "60%", marginTop: "3rem" }}
              onClick={() => {}}
              variant="contained"
              color="secondary"
              text="Proceed to Checkout"
            />
          ) : (
            <Button
              customStyles={{ width: "60%", marginTop: "3rem" }}
              onClick={() => {
                navigate("/login");
              }}
              variant="contained"
              color="primary"
              text="Login to Checkout"
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartScreen;
