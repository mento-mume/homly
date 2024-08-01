import type { Metadata } from "next";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Fredoka } from "next/font/google";
import { Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homly",
  description: "Your number one estate and home management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
