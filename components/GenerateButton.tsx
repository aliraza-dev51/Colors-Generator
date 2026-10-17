"use client";

import {Button} from "@mui/material"; 
import {useColorContext} from "@/context/ColorContex";

export default function GenerateButton() {
  const {generateRandomColors} = useColorContext();


  return (
    <Button variant="contained" color="primary" onClick={() => {
      generateRandomColors();
    }}>
      Generate Colors
    </Button>
  );
}
