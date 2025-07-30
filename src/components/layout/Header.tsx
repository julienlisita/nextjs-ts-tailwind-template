// src/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="fixed top-0 z-50 w-full h-14 sm:h-16 lg:h-20 bg-white shadow-md px-4 flex items-center justify-between">
      {/* Logo */}
      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex space-x-6 text-gray-800 font-semibold">
        <Link className="hover:text-blue-600 transition" href="/">Accueil</Link>
        <Link className="hover:text-blue-600 transition" href="/about">A propos</Link>
        <Link className="hover:text-blue-600 transition" href="/services">Services</Link>
        <Link className="hover:text-blue-600 transition" href="/contact">Contact</Link>
      </nav>

      {/* Burger button */}
      <button
        className="lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800 transition" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800 transition" />
        )}
      </button>

      {/* Mobile menu */}
      <div className={`absolute top-full left-0 w-full bg-white text-gray-800 shadow-md flex flex-col items-center transition-all duration-300 overflow-hidden lg:hidden ${
        isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
      }`}>
        <Link href="/" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-gray-100">Accueil</Link>
        <Link href="/about" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-gray-100">A propos</Link>
        <Link href="/services" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-gray-100">Services</Link>
        <Link href="/contact" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-gray-100">Contact</Link>
      </div>
    </header>
  );
}