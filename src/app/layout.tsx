// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

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
      <body className="h-full w-full flex flex-col antialiased">
        <main className="flex-1 mt-14 sm:mt-16 lg:mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
