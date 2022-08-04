import React from "react";
import { Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@emotion/react";

const QuantityButton = ({ qty, decrementFunc, incrementFunc }) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        padding: "0rem 1rem",
        borderRadius: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
        width: "6.4rem",
        border: `1px solid ${theme.palette.primary.main}`,
        "& svg": {
          cursor: "pointer",
          color: theme.palette.primary.main,
        },
      }}
      direction={"row"}>
      <RemoveIcon onClick={decrementFunc} />
      <Typography variant="h6">{qty}</Typography>
      <AddIcon onClick={incrementFunc} />
    </Stack>
  );
};

export default QuantityButton;
