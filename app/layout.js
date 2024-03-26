import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dim's LOR Vault",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning to disable a disable a warning in the browser generated by my ColorZilla extension in dev mode */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
