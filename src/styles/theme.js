import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#ffffff",
      dark: "#f5f5f5",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "3.5rem",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: "2.5rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1.1rem",
      lineHeight: 1.8,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontSize: "1rem",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 30px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
  },
});

export default theme;
