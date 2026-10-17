
"use client";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <Tooltip
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
