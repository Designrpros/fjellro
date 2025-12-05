import Link from 'next/link';
import { Mountain, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brandLink}>
              <Mountain className={styles.brandIcon} />
              <span className={styles.brandText}>Fjellro</span>
            </Link>
            <p className={styles.description}>
              Experience the ultimate Norwegian mountain retreat in Syndin, Vestre Slidre. 
              Where pristine nature meets luxury comfort, creating unforgettable memories 
              in the heart of Norway&apos;s stunning mountain landscape.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/fjellro"
                className={styles.socialLink}
                aria-label="Follow us on Instagram"
              >
                <Instagram className={styles.socialIcon} />
              </a>
              <a
                href="https://facebook.com/fjellro"
                className={styles.socialLink}
                aria-label="Follow us on Facebook"
              >
                <Facebook className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Fjellro' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/activities', label: 'Activities' },
                { href: '/book', label: 'Book Now' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={styles.sectionTitle}>Contact & Location</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div>
                  <p className={styles.contactText}>Syndin, Vestre Slidre</p>
                  <p className={styles.contactText}>2940 Fagernes, Norway</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <a
                  href="tel:+4712345678"
                  className={styles.contactLink}
                >
                  +47 123 45 678
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a
                  href="mailto:hello@fjellro.no"
                  className={styles.contactLink}
                >
                  hello@fjellro.no
                </a>
              </div>
            </div>

            {/* Local Area Info */}
            <div className={styles.attractionsSection}>
              <h4 className={styles.attractionsTitle}>Nearby Attractions</h4>
              <ul className={styles.attractionsList}>
                <li>• Fagernes Center - 15 min drive</li>
                <li>• Beitostølen Ski Resort - 30 min</li>
                <li>• Jotunheimen National Park - 45 min</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2024 Fjellro. All rights reserved. • Luxury cabin rental in Norway
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}