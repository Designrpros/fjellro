'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mountain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/activities', label: 'Activities' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Mountain className="h-6 w-6 lg:h-8 lg:w-8 text-fjellro-pine-600 group-hover:text-fjellro-pine-700 transition-colors" />
            <span className="text-xl lg:text-2xl font-playfair font-semibold text-fjellro-slate-900 group-hover:text-fjellro-pine-700 transition-colors">
              Fjellro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-fjellro-slate-700 hover:text-fjellro-pine-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-fjellro-pine-600 text-white px-6 py-2 rounded-full hover:bg-fjellro-pine-700 transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-fjellro-slate-700 hover:text-fjellro-pine-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-fjellro-slate-700 hover:text-fjellro-pine-600 hover:bg-fjellro-slate-50 rounded-md transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="block w-full text-center bg-fjellro-pine-600 text-white px-3 py-2 rounded-md hover:bg-fjellro-pine-700 transition-colors font-medium mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}