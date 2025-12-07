import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Get in touch to plan your perfect Norwegian mountain getaway
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>First Name</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      placeholder="Your first name"
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Last Name</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      placeholder="Your last name"
                      required 
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input 
                      type="email" 
                      className={styles.input}
                      placeholder="your@email.com"
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone</label>
                    <input 
                      type="tel" 
                      className={styles.input}
                      placeholder="+47 123 45 678"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <select className={styles.input} required>
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="activities">Activities & Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea 
                    className={styles.textarea}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <Send className={styles.buttonIcon} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoSection}>
              <div className={styles.contactCard}>
                <h3 className={styles.cardTitle}>Get in Touch</h3>
                
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} />
                  <div className={styles.contactDetails}>
                    <h4 className={styles.contactLabel}>Address</h4>
                    <p className={styles.contactText}>
                      Syndin, Vestre Slidre<br/>
                      2940 Fagernes, Norway
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <div className={styles.contactDetails}>
                    <h4 className={styles.contactLabel}>Phone</h4>
                    <a href="tel:+4712345678" className={styles.contactLink}>
                      +47 123 45 678
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <div className={styles.contactDetails}>
                    <h4 className={styles.contactLabel}>Email</h4>
                    <a href="mailto:hello@fjellro.no" className={styles.contactLink}>
                      hello@fjellro.no
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <Clock className={styles.contactIcon} />
                  <div className={styles.contactDetails}>
                    <h4 className={styles.contactLabel}>Response Time</h4>
                    <p className={styles.contactText}>
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.mapCard}>
                <h3 className={styles.cardTitle}>Location</h3>
                <div className={styles.mapPlaceholder}>
                  <span>Interactive Map</span>
                </div>
                <p className={styles.mapDescription}>
                  Located in the heart of Valdres, surrounded by pristine Norwegian wilderness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How do I make a reservation?</h3>
              <p className={styles.faqAnswer}>
                You can book directly through our website or contact us via phone or email. 
                We&apos;ll check availability and guide you through the booking process.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What is included in the rental?</h3>
              <p className={styles.faqAnswer}>
                The cabin comes fully furnished with kitchen, heating, Wi-Fi, and all essential 
                amenities. Check our booking page for a complete list of inclusions.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is the location accessible year-round?</h3>
              <p className={styles.faqAnswer}>
                Yes, the cabin is accessible throughout the year. We maintain the access road 
                during winter, though we recommend 4WD vehicles in snowy conditions.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can you arrange activities and tours?</h3>
              <p className={styles.faqAnswer}>
                Absolutely! We can help arrange local guides, equipment rental, and various 
                outdoor activities. Contact us with your interests and we&apos;ll make recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}