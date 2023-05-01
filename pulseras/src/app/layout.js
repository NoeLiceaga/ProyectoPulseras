import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { PulserasContext, PulserasProvider } from "@/context/PulserasContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <PulserasProvider>
        <NavBar />
        {children}
        </PulserasProvider>
      </body>
    </html>
  );
}
