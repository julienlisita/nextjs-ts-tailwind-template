// src/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="site-header">
      {/* Logo */}
      <div className="logo-wrapper">
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
      <nav className="main-nav hidden lg:flex">
        <Link className="nav-link" href="/">Accueil</Link>
        <Link className="nav-link" href="/about">A propos</Link>
        <Link className="nav-link" href="/services">Services</Link>
        <Link className="nav-link" href="/contact">Contact</Link>
      </nav>

      {/* Burger button */}
      <button className="menu-toggle lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="icon" /> : <Menu className="icon" />}
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link href="/" onClick={toggleMenu} className="mobile-link">Accueil</Link>
        <Link href="/about" onClick={toggleMenu} className="mobile-link">A propos</Link>
        <Link href="/services" onClick={toggleMenu} className="mobile-link">Services</Link>
        <Link href="/contact" onClick={toggleMenu} className="mobile-link">Contact</Link>
      </div>
    </header>
  );
}