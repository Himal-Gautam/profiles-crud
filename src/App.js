import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Profiles from "./Components/Profiles/Profiles";
import Add_EditProfile from "./Components/Profiles/Add_EditProfile";

// Define the light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // Use state to keep track of whether we're in dark mode or not
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle between light and dark mode
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Use the selected theme based on whether we're in dark mode or not
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    // Wrap the app in the selected theme
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Render the app bar */}
      <AppBar position="static" color={"default"}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viral Nation
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <LightModeIcon />
            {/* Add a toggle switch to change between light and dark mode */}
            <Switch
              checked={isDarkMode}
              color="default"
              onChange={handleToggleDarkMode}
              inputProps={{ "aria-label": "toggle dark mode" }}
            />
            <DarkModeIcon />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Set up routes for the app */}
      <Routes>
        {/* Redirect from the root path to /talent/my-talent */}
        <Route path="/" element={<Navigate to="/talent/my-talent" />} />

        {/* Render the Profiles component for /talent/my-talent */}
        <Route path="talent/my-talent" element={<Profiles />} />

        {/* Render the Add_EditProfile component for paths starting with /talent */}
        <Route path="talent/*">
          <Route path="add" element={<Add_EditProfile mode="add" />} />
          <Route path="edit/:id" element={<Add_EditProfile mode="edit" />} />
        </Route>

        {/* Add a catch-all route in case the user navigates to a non-existent path */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
