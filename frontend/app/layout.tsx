import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNSW ADSOC",
  description: "The University of New South Wales Data Science Society",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <AppRouterCacheProvider>

          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        {/* <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} UNSW Data Science Society. All rights reserved.
          </footer> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}