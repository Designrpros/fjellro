import { Calendar, Users, Clock, Check } from 'lucide-react';
import styles from './Book.module.css';

export default function Book() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Book Your Stay</h1>
          <p className={styles.heroSubtitle}>
            Reserve your luxury mountain retreat at Fjellro
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.booking}>
        <div className={styles.container}>
          <div className={styles.bookingGrid}>
            {/* Booking Form */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Check Availability</h2>
              <form className={styles.bookingForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Check-in Date</label>
                    <div className={styles.inputWrapper}>
                      <Calendar className={styles.inputIcon} />
                      <input 
                        type="date" 
                        className={styles.input}
                        required 
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Check-out Date</label>
                    <div className={styles.inputWrapper}>
                      <Calendar className={styles.inputIcon} />
                      <input 
                        type="date" 
                        className={styles.input}
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Number of Guests</label>
                    <div className={styles.inputWrapper}>
                      <Users className={styles.inputIcon} />
                      <select className={styles.input} required>
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Duration</label>
                    <div className={styles.inputWrapper}>
                      <Clock className={styles.inputIcon} />
                      <select className={styles.input} required>
                        <option value="">Select duration</option>
                        <option value="weekend">Weekend (2 nights)</option>
                        <option value="week">Week (7 nights)</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Special Requests</label>
                  <textarea 
                    className={styles.textarea}
                    placeholder="Any special requests or requirements..."
                    rows={4}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Check Availability & Pricing
                </button>
              </form>
            </div>

            {/* Pricing & Info */}
            <div className={styles.infoSection}>
              <div className={styles.priceCard}>
                <h3 className={styles.priceTitle}>Pricing</h3>
                <div className={styles.priceItem}>
                  <span>Weekend (2 nights)</span>
                  <span className={styles.price}>From 4,500 NOK</span>
                </div>
                <div className={styles.priceItem}>
                  <span>Week (7 nights)</span>
                  <span className={styles.price}>From 12,000 NOK</span>
                </div>
                <div className={styles.priceNote}>
                  *Prices vary by season and availability
                </div>
              </div>

              <div className={styles.includesCard}>
                <h3 className={styles.includesTitle}>What&apos;s Included</h3>
                <ul className={styles.includesList}>
                  <li>
                    <Check className={styles.checkIcon} />
                    Fully furnished luxury cabin
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Kitchen with modern appliances
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Fireplace and heating
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Wi-Fi and entertainment system
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Outdoor terrace and BBQ
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Parking space
                  </li>
                  <li>
                    <Check className={styles.checkIcon} />
                    Welcome package with local treats
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className={styles.policies}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Booking Policies</h2>
          <div className={styles.policiesGrid}>
            <div className={styles.policyCard}>
              <h3 className={styles.policyTitle}>Cancellation Policy</h3>
              <p className={styles.policyText}>
                Free cancellation up to 14 days before check-in. 
                50% refund for cancellations 7-14 days prior. 
                No refund for cancellations within 7 days.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3 className={styles.policyTitle}>Check-in/Check-out</h3>
              <p className={styles.policyText}>
                Check-in: 3:00 PM - 8:00 PM<br/>
                Check-out: 8:00 AM - 11:00 AM<br/>
                Late check-in available by arrangement.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3 className={styles.policyTitle}>House Rules</h3>
              <p className={styles.policyText}>
                No smoking indoors. Pets welcome with prior approval. 
                Maximum 6 guests. Quiet hours 10 PM - 8 AM. 
                Respect the natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}