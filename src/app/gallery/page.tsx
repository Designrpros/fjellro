import styles from './Gallery.module.css';

export default function Gallery() {
  const images = [
    { id: 1, title: 'Mountain View', category: 'exterior' },
    { id: 2, title: 'Living Room', category: 'interior' },
    { id: 3, title: 'Winter Landscape', category: 'exterior' },
    { id: 4, title: 'Bedroom', category: 'interior' },
    { id: 5, title: 'Kitchen', category: 'interior' },
    { id: 6, title: 'Summer Trail', category: 'activities' },
    { id: 7, title: 'Fireplace', category: 'interior' },
    { id: 8, title: 'Skiing', category: 'activities' },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Photo Gallery</h1>
          <p className={styles.heroSubtitle}>
            Explore the beauty of Fjellro through stunning imagery
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button className={`${styles.filterBtn} ${styles.active}`}>
              All
            </button>
            <button className={styles.filterBtn}>
              Exterior
            </button>
            <button className={styles.filterBtn}>
              Interior
            </button>
            <button className={styles.filterBtn}>
              Activities
            </button>
          </div>

          <div className={styles.imageGrid}>
            {images.map((image) => (
              <div key={image.id} className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <span>{image.title}</span>
                </div>
                <div className={styles.imageOverlay}>
                  <h3 className={styles.imageTitle}>{image.title}</h3>
                  <span className={styles.imageCategory}>{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className={styles.virtualTour}>
        <div className={styles.container}>
          <div className={styles.tourContent}>
            <h2 className={styles.sectionTitle}>360° Virtual Tour</h2>
            <p className={styles.tourDescription}>
              Take a virtual walk through Fjellro and experience the space before your visit.
            </p>
            <div className={styles.tourPlaceholder}>
              <span>360° Virtual Tour Player</span>
            </div>
            <button className={styles.tourBtn}>
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}