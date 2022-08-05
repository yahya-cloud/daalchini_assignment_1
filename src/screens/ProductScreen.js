import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import Product from "../components/Product";
import { AppContext } from "../contexts/AppContext";
import useSearchFilter from "../hooks/useSearchFilter";
import FormInput from "../components/FormInput/index";

const ProductScreen = () => {
  const { products } = useContext(AppContext);
  const updatedProducts = useMemo(
    () => [
      ...Object.keys(products).map((el) => {
        return { productId: el, ...products[el] };
      }),
    ],
    [products]
  );

  const [value, setValue, filteredData] = useSearchFilter(updatedProducts, [
    "name",
  ]);

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Product List
      </Typography>
      <Stack mt="5rem" sx={{ alignItems: "center" }}>
        <Stack spacing={2} sx={{ width: { md: "100rem", xs: "33rem" } }}>
          <FormInput
            label="Search Product"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            inputStyles={{
              alignSelf: "flex-start",
              width: "20rem",
            }}
          />
          {filteredData.map((el) => (
            <Product
              key={el.productId}
              productId={el.productId}
              name={el.name}
              price={el.price}
              qty={el.qty}
              link={el.link}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductScreen;
