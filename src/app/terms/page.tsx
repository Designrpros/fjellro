import styles from './Terms.module.css';

export default function Terms() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: December 2024</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Booking and Reservations</h2>
            <p className={styles.paragraph}>
              All bookings are subject to availability and confirmation. A deposit is required 
              to secure your reservation, with the balance due upon arrival or as specified 
              in your booking confirmation.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cancellation Policy</h2>
            <ul className={styles.list}>
              <li>Free cancellation up to 14 days before check-in</li>
              <li>50% refund for cancellations 7-14 days prior to check-in</li>
              <li>No refund for cancellations within 7 days of check-in</li>
              <li>Cancellations due to weather or unforeseen circumstances will be considered on a case-by-case basis</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>House Rules</h2>
            <ul className={styles.list}>
              <li>Maximum occupancy: 6 guests</li>
              <li>No smoking inside the cabin</li>
              <li>Pets are welcome with prior approval and additional fee</li>
              <li>Quiet hours: 10:00 PM - 8:00 AM</li>
              <li>Guests are responsible for any damage to the property</li>
              <li>Please respect the natural environment and wildlife</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Liability</h2>
            <p className={styles.paragraph}>
              Guests use the facilities at their own risk. Fjellro is not liable for any 
              accidents, injuries, or losses that may occur during your stay. We recommend 
              travel insurance for all guests.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.paragraph}>
              For questions about these terms, please contact us at{' '}
              <a href="mailto:hello@fjellro.no" className={styles.link}>
                hello@fjellro.no
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}