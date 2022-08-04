import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "../../themes/index";
import { StyledButton } from "./styles";

const Button = ({
  Icon,
  customStyles,
  color,
  btnDisable,
  text,
  onClick,
  variant,
}) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <StyledButton
        disabled={btnDisable && true}
        onClick={onClick}
        sx={{
          ...customStyles,
        }}
        color={color}
        variant={`${variant}`}>
        {Icon && (
          <Icon
            style={{ width: "1.8rem", height: "1.8rem", marginRight: "8px" }}
          />
        )}
        <span> {text}</span>
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
