import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import SiteLayouts from "./layouts/site-layouts";

const poppinsFonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "website education",
  description: "website education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsFonts.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteLayouts>{children}</SiteLayouts>
      </body>
    </html>
  );
}
