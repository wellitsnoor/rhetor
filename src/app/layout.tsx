import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const neue = localFont({
  src: [
    {
      path: "../fonts/NeueEinstellung-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/NeueEinstellung-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "Rhetor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neue.variable} ${neue.className} antialiased`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
