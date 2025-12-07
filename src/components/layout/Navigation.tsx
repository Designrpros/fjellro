'use client';

import Link from 'next/link';
import { Mountain, Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/activities', label: 'Activities' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Mountain className={styles.logoIcon} />
          <span className={styles.logoText}>Fjellro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/book" className={styles.bookButton}>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/book" 
            className={styles.mobileBookButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}