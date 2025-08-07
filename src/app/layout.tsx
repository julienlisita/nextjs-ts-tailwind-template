// src/app/layout.tsx

import './globals.css';
import { metadata } from './metadata';
export { metadata };
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
