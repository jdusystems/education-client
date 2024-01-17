import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
        contrastText: "#fff",
        main: '#072556',
    },
    danger: {
        contrastText: "#fff",
        main: '#BC002D',
    },
    grey: {
        main: "#D0D5DD",
    },
    success : {
        contrastText: "#fff",
        main: '#7CC248',
    },
    warning: {
      contrastText: "#fff",
      main: '#FE6645',
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
});  

