import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";

function App() {

  const theme = createTheme({

    palette: {
      primary: {
        main: "#dc143c",
      },
      secondary: {
        main: teal[200],
      },
      purnavy: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },

  });

  return (
    <ThemeProvider theme={theme} >
      <Home />;
    </ThemeProvider>
  )
};

export default App;