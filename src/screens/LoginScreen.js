import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { AppContext } from "../contexts/AppContext";

const LoginScreen = () => {
  const { user } = useContext(AppContext);

  return (
    <Box>
      <Typography marginTop={"2rem"} variant="h2">
        Login
      </Typography>
      <Box
        mt={"5rem"}
        sx={{
          width: "max-content",
          position: "relative",
          left: "50%",
          top: "30%",
          transform: "translate(-50%)",
        }}>
        {user ? (
          <Typography
            fontSize={{ xs: "2rem", md: "3.75rem" }}
            marginTop={"2rem"}
            variant="h2">
            Hello {user.name}, You are Already Logged in!!
          </Typography>
        ) : (
          <LoginForm />
        )}
      </Box>
    </Box>
  );
};

export default LoginScreen;
