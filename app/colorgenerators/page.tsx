'use client';
import Appbar from "@/components/Appbar";
import ColorPalette from "@/components/ColorPalette";
import GenerateButton from "@/components/GenerateButton";
import { Box } from "@mui/material";
export default function ColorGenerators() {
  return (
    <>
    
      <Appbar />
      <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>

        <GenerateButton />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "16px" }}>
        <ColorPalette />
      </Box>
    
    </>
  
  );
}
