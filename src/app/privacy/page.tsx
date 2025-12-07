import styles from './Privacy.module.css';

export default function Privacy() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: December 2024</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <p className={styles.paragraph}>
              We collect information you provide directly to us, such as when you make a reservation, 
              contact us, or sign up for our newsletter. This may include your name, email address, 
              phone number, and payment information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <ul className={styles.list}>
              <li>To process your reservations and provide our services</li>
              <li>To communicate with you about your booking</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our services and customer experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information Sharing</h2>
            <p className={styles.paragraph}>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Security</h2>
            <p className={styles.paragraph}>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@fjellro.no" className={styles.link}>
                privacy@fjellro.no
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}