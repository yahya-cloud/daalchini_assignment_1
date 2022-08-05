import React, { useContext, useState } from "react";
import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "../Button";
import FormInput from "../FormInput";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    const user = { name, phone };
    setUser(user);
    navigate(-1);
  };

  const theme = useTheme();
  return (
    <Stack
      alignItems={"center"}
      component={"form"}
      sx={{
        padding: "2rem",
        height: "32rem",
        width: { xs: "30rem", md: "35rem" },
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
      }}>
      <AccountCircleIcon
        sx={{
          color: theme.palette.primary.main,
          height: "10rem",
          width: "10rem",
        }}
      />
      <FormInput
        label="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        inputStyles={{ width: "90%", marginTop: "2rem" }}
      />
      <FormInput
        label="Phone Number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        inputStyles={{ width: "90%", marginTop: "2rem" }}
      />
      <Button
        customStyles={{ width: "50%", marginTop: "3rem" }}
        onClick={submitHandler}
        variant="contained"
        color="primary"
        text="Login"
      />
    </Stack>
  );
};

export default LoginForm;
