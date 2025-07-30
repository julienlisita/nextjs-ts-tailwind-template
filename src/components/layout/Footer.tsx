// src/components/layout/Footer.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 flex flex-col space-y-3 sm:flex-row sm:space-y-0 justify-between items-center px-4 py-3">
      
      {/* Logo à gauche */}
      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
        <Image
          src="/images/logo.png"
          alt="Logo Julien Lisita"
          fill
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Menu et mentions légales */}
      <div className="flex flex-col items-center">
        <nav className="font-bold text-sm flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-black mb-2">
          <Link className="hover:underline text-center" href="/legal/imprint">Mentions légales</Link>
          <Link className="hover:underline text-center" href="/legal/privacy">Politique de confidentialité</Link>
          <Link className="hover:underline text-center" href="/legal/term">Conditions d'utilisation</Link>
        </nav>
        <p className="font-bold text-xs sm:text-sm text-center text-black">
          © 2025 Nom d'entreprise – Activité
        </p>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex items-center space-x-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook className="w-8 h-8 sm:w-10 sm:h-10  text-black hover:text-gray-500 transition" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-black hover:text-gray-500 transition" />
        </a>
      </div>
    </footer>
  );
}