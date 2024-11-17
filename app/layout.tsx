import { Metadata } from "next";
import "./globals.css";
import Nav from "./ui/Nav";

export const metadata: Metadata = {
  title: "Rest Countries Site",
  description: "This site gives you details about every country in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased *:font-nunito dark:bg-dark_mode_bg bg-light_mode_bg`}
      >
        <Nav />
        {children}
        <div className="text-black font-bold text-sm text-center mt-5">Coded by Onos Ejoor (DevText16)</div>
      </body>
    </html>
  );
}
