import Link from 'next/link';
import { Calendar, Camera, ChevronDown } from 'lucide-react';
import styles from '../../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Fjellro
          </h1>
          <p className={styles.heroSubtitle}>
            Experience luxury in the heart of Norway&apos;s majestic mountains. 
            Your perfect mountain retreat awaits in Syndin, Vestre Slidre.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/book" className={styles.primaryButton}>
              <Calendar className={styles.buttonIcon} />
              Book Your Stay
            </Link>
            <Link href="/gallery" className={styles.secondaryButton}>
              <Camera className={styles.buttonIcon} />
              View Gallery
            </Link>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Discover More</span>
        <ChevronDown className={styles.scrollIcon} />
      </div>
    </section>
  );
}