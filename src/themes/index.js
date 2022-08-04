import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Lato, sans-serif",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#36b37e",
    },
    secondary: {
      main: "#ff9b0f",
    },
    tertiary: {
      main: "#fff",
    },
    fourth: {
      main: "#ccc",
    },
  },
});

let buttonTheme = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: "contained" },
          style: { color: "#fff" },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          [theme.breakpoints.up("md")]: {
            fontSize: "1.6rem",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem",
          },
          lineHeight: 1,
          padding: "5px 9px",
          width: "15rem",
          height: "4rem",
          fontWeight: "bold",
          cursor: "pointer",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export { buttonTheme };
export default theme;
