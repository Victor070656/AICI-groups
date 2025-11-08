import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AICI Group - Real Estate and Consultancy",
  description:
    "Building Futures, Delivering Excellence. Your trusted partner in real estate and consultancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
