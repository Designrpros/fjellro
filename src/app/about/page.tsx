import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Fjellro</h1>
          <p className={styles.heroSubtitle}>
            Discover the story behind Norway&apos;s most exclusive mountain retreat
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.paragraph}>
                Nestled in the pristine wilderness of Syndin, Vestre Slidre, Fjellro represents 
                the perfect harmony between Norwegian tradition and modern luxury. Our mountain 
                retreat was born from a passion for sharing the raw beauty and tranquil serenity 
                of Norway&apos;s majestic landscapes.
              </p>
              <p className={styles.paragraph}>
                Built with sustainable materials and designed to complement the natural environment, 
                Fjellro offers an authentic Norwegian experience without compromising on comfort. 
                Every detail has been carefully crafted to provide our guests with an unforgettable 
                escape from the ordinary.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span>Mountain Landscape</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Makes Fjellro Special</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Authentic Norwegian Design</h3>
              <p className={styles.featureDescription}>
                Traditional architecture meets modern comfort with locally sourced materials 
                and contemporary amenities.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Pristine Location</h3>
              <p className={styles.featureDescription}>
                Surrounded by untouched wilderness, offering complete privacy and stunning 
                panoramic views of the Norwegian mountains.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Sustainable Luxury</h3>
              <p className={styles.featureDescription}>
                Eco-friendly construction and operations that respect the natural environment 
                while providing premium comfort.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Year-Round Activities</h3>
              <p className={styles.featureDescription}>
                From skiing and hiking to Northern Lights viewing, experience the best of 
                Norwegian outdoor adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.location}>
        <div className={styles.container}>
          <div className={styles.locationGrid}>
            <div className={styles.locationText}>
              <h2 className={styles.sectionTitle}>The Perfect Location</h2>
              <p className={styles.paragraph}>
                Syndin, Vestre Slidre offers the perfect base for exploring some of Norway&apos;s 
                most spectacular natural attractions. Located in the heart of the Valdres region, 
                you&apos;re just minutes away from world-class skiing, hiking trails, and the 
                gateway to Jotunheimen National Park.
              </p>
              <div className={styles.locationHighlights}>
                <div className={styles.highlight}>
                  <strong>15 minutes</strong> to Fagernes town center
                </div>
                <div className={styles.highlight}>
                  <strong>30 minutes</strong> to Beitostølen ski resort
                </div>
                <div className={styles.highlight}>
                  <strong>45 minutes</strong> to Jotunheimen National Park
                </div>
              </div>
            </div>
            <div className={styles.locationMap}>
              <div className={styles.imagePlaceholder}>
                <span>Location Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}