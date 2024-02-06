// IMPORTS -
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Hydrate from "../components/Hydrate";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamo",
  description: "Turns ideas into realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Hydrate>{children}</Hydrate>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

// 1:17:03
