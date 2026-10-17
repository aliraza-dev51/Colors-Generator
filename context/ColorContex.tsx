
"use client";

import { createContext, useContext, useState } from "react";

interface ColorContextType {
  colors: string[];
  generateRandomColors: () => void;
}


const ColorContext = createContext<ColorContextType | undefined>(
  undefined
);

export function ColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colors, setColors] = useState<string[]>([
    "#FF5733",
    "#3498DB",
    "#2ECC71",
    "#9B59B6",
    "#F39C12",
  ]);

  const generateRandomColors = () => {
    const newColors = Array.from({ length: 5 }, () => {
      const randomNumber = Math.floor(Math.random() * 16777216);

      return `#${randomNumber.toString(16).padStart(6, "0")}`;
    });

    setColors(newColors);
    console.log(newColors);
  };

  return (
    <ColorContext.Provider
      value={{
        colors,
        generateRandomColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}



export function useColorContext() {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error(
      "useColorContext must be used inside ColorProvider"
    );
  }

  return context;
}
