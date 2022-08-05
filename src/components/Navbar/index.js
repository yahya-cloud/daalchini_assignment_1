import React, { useContext } from "react";
import { StyledBox, StyledNavLink, StyledStack } from "./styles";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { AppContext } from "../../contexts/AppContext";
import { totalOrderQty } from "../../libs/utils";

const Navbar = () => {
  const { products } = useContext(AppContext);
  const totalQty = totalOrderQty(products);

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
          <Badge
            badgeContent={totalQty}
            sx={{ "& .MuiBadge-badge": { color: "#fff", fontSize: "1rem" } }}
            color="secondary">
            <ShoppingCartIcon />
          </Badge>
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
