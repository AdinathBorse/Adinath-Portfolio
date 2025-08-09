import styles from '../../styles/PageContainer.module.css';
// Dummy Achievements Page
export default function Achievements() {
  return (
    <div className={styles.pageContainer}>
      <h1>Achievements</h1>
      <ul>
        <li>Winner - Coding Hackathon 2024</li>
        <li>Top 10 - National Project Expo</li>
      </ul>
    </div>
  );
}
