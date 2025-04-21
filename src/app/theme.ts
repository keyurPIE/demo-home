// theme.ts
import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  typography: {
    fontWeightLight: 600,
    fontWeightRegular: 600,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    // fontFamily: "var(--font-geist-mono), monospace",
    fontFamily: "var(--font-geist), sans-serif",
    button: {
      fontWeight: 600,
      textTransform: "none", // optional
    },
  },
});

export default mainTheme;
