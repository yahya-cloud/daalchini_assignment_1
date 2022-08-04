import { styled, experimental_sx as sx } from "@mui/system";
import { Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledBox = styled(Box)(({ theme }) =>
  sx({
    position: "fixed",
    width: "100vw",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0rem 2rem",
    height: "6rem",
    boxSizing: "border-box",
    color: theme.palette.tertiary.main,
    backgroundColor: theme.palette.primary.main,
  })
);

export const StyledNavLink = styled(NavLink)(
  sx({
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    textDecoration: "none",
    transition: "all .2s ease",
    "& svg": { height: "3rem", width: "3rem" },
    "&:hover, &.active": {
      backgroundColor: "#43B47C",
    },
    "&:hover svg, &.active svg": {
      color: "#fff",
    },
  })
);

export const StyledStack = styled(Stack)(
  sx({
    width: "50%",
    justifyContent: "space-between",
  })
);
