import * as React from "react";
import { styled } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(
  sx({
    "& label": {
      fontSize: "12px",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#43B47C",
      },
    },
  })
);

const FormInput = ({
  type,
  label,
  inputStyles,
  fullWidth,
  value,
  onChange,
}) => {
  return (
    <StyledTextField
      type={type}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      required
      id="form-input"
      label={label}
      style={{ ...inputStyles }}
    />
  );
};

export default FormInput;
