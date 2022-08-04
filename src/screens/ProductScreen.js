import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Product from "../components/Product";
import { AppContext } from "../contexts/AppContext";

const ProductScreen = () => {
  const { products } = useContext(AppContext);

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Product List
      </Typography>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {Object.keys(products).map((el) => (
          <Product
            key={products[el].name}
            productId={el}
            name={products[el].name}
            price={products[el].price}
            qty={products[el].qty}
            link={products[el].link}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ProductScreen;
