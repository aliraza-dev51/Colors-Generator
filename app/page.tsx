import ColorGenerators from "./colorgenerators/page";
import { ColorProvider } from "@/context/ColorContex";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export const metadata = {
  title: "Color Palette Generator",
  description: "Generate random color palettes",
};
export default function Home() {
  return (
    <>
      <AppRouterCacheProvider>
      <ThemeProvider>    
      <ColorProvider>
        <ColorGenerators />
      </ColorProvider>
      </ThemeProvider>  
      </AppRouterCacheProvider>
    </>
  );
}
