import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Product from "../components/Product";
import { AppContext } from "../contexts/AppContext";
import {
  filterCartProducts,
  totalOrderQty,
  totalOrderValue,
} from "../libs/utils";

const CartScreen = () => {
  const { products, user } = useContext(AppContext);
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    let filteredProducts = filterCartProducts(products).map((el) => {
      return {
        key: el,
        productId: el,
        qty: products[el].qty,
        name: products[el].name,
        price: products[el].price,
        link: products[el].link,
      };
    });
    setCartProducts(filteredProducts);
  }, [products]);

  const navigate = useNavigate();

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Cart
      </Typography>
      {cartProducts?.length === 0 ? (
        <Typography align="center" variant="h4">
          Please Add Products to see real UI of Cart Screen :)
        </Typography>
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            mt: "5rem",
            justifyContent: "center",
            alignItems: { xs: "center", md: "start" },
          }}>
          <Stack spacing={2} sx={{ alignItems: "center" }}>
            {cartProducts?.map((el) => (
              <Product
                key={el.productId}
                productId={el.productId}
                qty={el.qty}
                name={el.name}
                price={el.price}
                link={el.link}
              />
            ))}
          </Stack>
          <Stack
            sx={{
              marginTop: { sm: "4rem" },
              height: "20rem",
              width: { xs: "32rem", md: "40rem" },
              border: "1px solid #ccc",
              borderRadius: "8px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography fontWeight={300} marginTop={"2rem"} variant="h3">
              Subtotal ({cartProducts && totalOrderQty(cartProducts)}) items
            </Typography>
            <Typography fontWeight={500} marginTop={"2rem"} variant="h4">
              Total: ₹ {cartProducts && totalOrderValue(cartProducts)}
            </Typography>
            {user ? (
              <Button
                customStyles={{ width: "60%", marginTop: "3rem" }}
                onClick={() => {
                  navigate("/checkout");
                }}
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
      )}
    </Box>
  );
};

export default CartScreen;
