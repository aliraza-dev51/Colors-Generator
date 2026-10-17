"use client";

import { Box } from "@mui/material";
import ColorCard from "@/components/Colorcard";
import { useColorContext } from "@/context/ColorContex";

export default function ColorPalette() {
  const { colors } = useColorContext();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        },
        gap: 3,
        p: 3,
      }}
    >
      {colors.map((color) => (
        <ColorCard
          key={color}
          color={color}
        />
      ))}
    </Box>
  );
}

