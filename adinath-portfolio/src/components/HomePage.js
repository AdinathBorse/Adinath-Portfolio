import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.profilePicWrapper}>
        <img
          src='/adinath-profile.jpg'
          alt="Profile"
          className={styles.profilePic}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Hi, I'm Adinath Borse</h1>
        <p className={styles.subtitle}>Aspiring Web Developer | Passionate Coder | Tech Enthusiast</p>
        <p className={styles.description}>
          Welcome to my portfolio! I am a dedicated and creative developer with a passion for building beautiful and functional web applications. Explore my skills, projects, and achievements!
        </p>
      </div>
    </section>
  );
}
