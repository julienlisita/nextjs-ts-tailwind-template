// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Mon site vitrine",
  description: "Une landing page Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col antialiased">
        <Header/>
        <main className="flex-1 mt-14 sm:mt-16 lg:mt-20 pt-14 sm:pt-16 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
