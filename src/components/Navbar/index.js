import React from "react";
import { StyledBox, StyledNavLink, StyledStack } from "./styles";
import { useTheme } from "@emotion/react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Box, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const theme = useTheme();
  return (
    <StyledBox>
      <StyledStack direction={"row"}>
        <StyledNavLink to="/">
          <WidgetsIcon />
          <Typography fontWeight={700} variant="h5">
            Products
          </Typography>
        </StyledNavLink>

        <StyledNavLink to="/cart">
          <ShoppingCartIcon />
          <Typography fontWeight={700} variant="h5">
            Cart
          </Typography>
        </StyledNavLink>

        <StyledNavLink to="/login">
          <PersonIcon />
          <Typography fontWeight={700} variant="h5">
            Login
          </Typography>
        </StyledNavLink>
      </StyledStack>
    </StyledBox>
  );
};

export default Navbar;
