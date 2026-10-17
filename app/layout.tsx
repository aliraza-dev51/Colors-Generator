
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import {ColorProvider} from "@/context/ColorContex";  

export const metadata: Metadata = {
  title: "Color Palette Generator",
  description: "Generate random color palettes",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ColorProvider>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </ColorProvider>
      </body>
    </html>
  );
}
  