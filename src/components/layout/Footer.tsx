// src/components/layout/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Bloc principal */}
      <div className="footer-top">
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

        {/* Menu principal */}
        <nav className="footer-nav">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Témoignages</Link>
          <Link href="/news">Actualités</Link>
          <Link href="/recruitment">Recrutement</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Réseaux sociaux */}
        <div className="footer-socials">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="footer-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="footer-icon" />
          </a>
        </div>
      </div>

      {/* Séparateur */}
      <div className="footer-separator" />

      {/* Bloc inférieur */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 Compagnie Care & Services – Entreprise d’aide à domicile
        </p>
        <nav className="footer-legal">
          <Link href="/legal/imprint">Mentions légales</Link>
          <Link href="/legal/privacy">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
