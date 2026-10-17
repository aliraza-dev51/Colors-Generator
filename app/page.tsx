import ColorGenerators from "./colorgenerators/page";
import { ColorProvider } from "@/context/ColorContex";

export const metadata = {
  title: "Color Palette Generator",
  description: "Generate random color palettes",
};
export default function Home() {
  return (
    <>
      <ColorProvider>
        <ColorGenerators />
      </ColorProvider>
    </>
  );
}
