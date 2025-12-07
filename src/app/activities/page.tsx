import { Snowflake, Mountain, Camera, TreePine, Fish, Bike } from 'lucide-react';
import styles from './Activities.module.css';

export default function Activities() {
  const activities = [
    {
      icon: Snowflake,
      title: 'Winter Sports',
      description: 'World-class skiing and snowboarding at nearby Beitostølen resort.',
      season: 'Winter',
      duration: 'Full Day',
    },
    {
      icon: Mountain,
      title: 'Mountain Hiking',
      description: 'Explore scenic trails with breathtaking views of the Norwegian peaks.',
      season: 'Summer',
      duration: '2-8 hours',
    },
    {
      icon: Camera,
      title: 'Northern Lights',
      description: 'Witness the magical Aurora Borealis in pristine dark skies.',
      season: 'Winter',
      duration: 'Evening',
    },
    {
      icon: TreePine,
      title: 'Forest Walks',
      description: 'Peaceful walks through ancient Norwegian forests and valleys.',
      season: 'All Year',
      duration: '1-3 hours',
    },
    {
      icon: Fish,
      title: 'Fishing',
      description: 'Try your hand at fishing in pristine mountain lakes and streams.',
      season: 'Summer',
      duration: 'Half Day',
    },
    {
      icon: Bike,
      title: 'Mountain Biking',
      description: 'Adventure cycling through mountain trails and scenic routes.',
      season: 'Summer',
      duration: '2-6 hours',
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Activities & Adventures</h1>
          <p className={styles.heroSubtitle}>
            Discover endless outdoor adventures in the heart of Norway&apos;s wilderness
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className={styles.activities}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What You Can Do</h2>
          <div className={styles.activitiesGrid}>
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className={styles.activityCard}>
                  <div className={styles.activityIcon}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.activityTitle}>{activity.title}</h3>
                  <p className={styles.activityDescription}>{activity.description}</p>
                  <div className={styles.activityMeta}>
                    <span className={styles.season}>{activity.season}</span>
                    <span className={styles.duration}>{activity.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className={styles.seasonal}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Seasonal Guide</h2>
          <div className={styles.seasonGrid}>
            <div className={styles.seasonCard}>
              <h3 className={styles.seasonTitle}>Winter (Dec - Mar)</h3>
              <div className={styles.seasonImage}>
                <span>Winter Landscape</span>
              </div>
              <ul className={styles.seasonActivities}>
                <li>Cross-country skiing</li>
                <li>Snowshoeing</li>
                <li>Northern Lights viewing</li>
                <li>Ice fishing</li>
                <li>Cozy fireside evenings</li>
              </ul>
            </div>
            <div className={styles.seasonCard}>
              <h3 className={styles.seasonTitle}>Summer (Jun - Aug)</h3>
              <div className={styles.seasonImage}>
                <span>Summer Mountains</span>
              </div>
              <ul className={styles.seasonActivities}>
                <li>Mountain hiking</li>
                <li>Fishing in alpine lakes</li>
                <li>Mountain biking</li>
                <li>Wildlife photography</li>
                <li>Midnight sun experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Guides */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Equipment & Guides</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Equipment Rental</h3>
              <p className={styles.serviceDescription}>
                High-quality outdoor gear available for rent, including skis, hiking boots, 
                and winter clothing.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Local Guides</h3>
              <p className={styles.serviceDescription}>
                Experienced local guides available for hiking, fishing, and cultural tours 
                of the region.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Transportation</h3>
              <p className={styles.serviceDescription}>
                Shuttle services to popular destinations and activity starting points 
                throughout the area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}