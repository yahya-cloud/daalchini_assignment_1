import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { totalQtyAmount } from "../../libs/utils";
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
        minHeight: "min-content",
        maxHeight: "max-content",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
        justifyContent: "center",
        alignItems: { xs: "center" },
        flexWrap: "wrap",
        flexDirection: { md: "row", xs: "column" },
      }}>
      <Box
        sx={{
          mb: { xs: 3, md: 0 },
          height: { xs: "10rem", md: "14rem" },
          width: "20rem",
        }}>
        <img
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          src={link}
          alt="product"
        />
      </Box>
      <Stack
        sx={{
          marginLeft: { md: "3rem", xs: 0 },
          justifyContent: "flex-start",
          flex: 1,
        }}>
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
                {qty} X {price} &nbsp;=&nbsp; ₹ {totalQtyAmount(qty, price)}
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
