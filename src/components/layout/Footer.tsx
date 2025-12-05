import Link from 'next/link';
import { Mountain, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-fjellro-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-fjellro-pine-400" />
              <span className="text-2xl font-playfair font-semibold">Fjellro</span>
            </Link>
            <p className="text-fjellro-slate-300 mb-6 max-w-md leading-relaxed">
              Experience the ultimate Norwegian mountain retreat in Syndin, Vestre Slidre. 
              Where pristine nature meets luxury comfort, creating unforgettable memories 
              in the heart of Norway's stunning mountain landscape.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/fjellro"
                className="text-fjellro-slate-400 hover:text-fjellro-pine-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/fjellro"
                className="text-fjellro-slate-400 hover:text-fjellro-pine-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fjellro-pine-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Fjellro' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/activities', label: 'Activities' },
                { href: '/book', label: 'Book Now' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fjellro-slate-300 hover:text-fjellro-pine-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fjellro-pine-400">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-fjellro-pine-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-fjellro-slate-300">Syndin, Vestre Slidre</p>
                  <p className="text-fjellro-slate-300">2940 Fagernes, Norway</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fjellro-pine-400 flex-shrink-0" />
                <a
                  href="tel:+4712345678"
                  className="text-fjellro-slate-300 hover:text-fjellro-pine-400 transition-colors"
                >
                  +47 123 45 678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fjellro-pine-400 flex-shrink-0" />
                <a
                  href="mailto:hello@fjellro.no"
                  className="text-fjellro-slate-300 hover:text-fjellro-pine-400 transition-colors"
                >
                  hello@fjellro.no
                </a>
              </div>
            </div>

            {/* Local Area Info */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-fjellro-wood-300">Nearby Attractions</h4>
              <ul className="text-sm text-fjellro-slate-400 space-y-1">
                <li>• Fagernes Center - 15 min drive</li>
                <li>• Beitostølen Ski Resort - 30 min</li>
                <li>• Jotunheimen National Park - 45 min</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fjellro-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fjellro-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Fjellro. All rights reserved. • Luxury cabin rental in Norway
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-fjellro-slate-400 hover:text-fjellro-pine-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-fjellro-slate-400 hover:text-fjellro-pine-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}