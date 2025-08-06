// src/components/layout/Footer.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Navigation */}
      <div className="footer-center">
        <nav className="footer-links">
          <Link href="/legal/imprint">Mentions légales</Link>
          <Link href="/legal/privacy">Politique de confidentialité</Link>
          <Link href="/legal/term">Conditions d'utilisation</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <p className="footer-copy">© 2025 Nom d'entreprise – Activité</p>
      </div>

      {/* Réseaux sociaux */}
      <div className="footer-socials">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FiFacebook className="footer-icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FiInstagram className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}
