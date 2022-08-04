import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Button from "../Button";
import QuantityButton from "../QuantityButton";

const Product = ({ productId, name, price, qty, link }) => {
  const { addProduct, removeProduct } = useContext(AppContext);
  const theme = useTheme();
  return (
    <Stack
      sx={{
        padding: "1.5rem 2rem",
        boxSizing: "border-box",
        width: { md: "100rem" },
        height: "16rem",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
      }}
      direction="row">
      <Box sx={{ width: "20rem" }}>
        <img
          style={{ height: "100%", borderRadius: "8px" }}
          src={link}
          alt="product"
        />
      </Box>
      <Stack sx={{ marginLeft: "3rem", justifyContent: "flex-start", flex: 1 }}>
        <Typography fontWeight={600} variant="h4">
          {name}
        </Typography>
        <Typography sx={{ mt: ".5rem" }} fontWeight={400} variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia
          facilisis est quis
        </Typography>

        <Stack
          sx={{
            marginTop: "4rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          flexDirection={"row"}>
          <Stack flexDirection={"row"}>
            <Typography fontWeight={700} variant="h5">
              ₹ {price}
            </Typography>
            {qty !== 0 && (
              <Typography
                variant="h5"
                sx={{
                  color: "#333",
                  marginLeft: "2rem",
                }}>
                {qty} X {price} &nbsp;=&nbsp; ₹ 50
              </Typography>
            )}
          </Stack>
          {qty === 0 ? (
            <Button
              customStyles={{ width: "1rem", height: "3rem" }}
              onClick={() => {
                addProduct(productId);
              }}
              variant="contained"
              color="primary"
              text="Add"
            />
          ) : (
            <QuantityButton
              qty={qty}
              decrementFunc={() => {
                removeProduct(productId);
              }}
              incrementFunc={() => {
                addProduct(productId);
              }}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
