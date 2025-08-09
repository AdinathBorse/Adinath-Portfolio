import styles from '../../styles/PageContainer.module.css';
// Dummy Education Page
export default function Education() {
  return (
    <div className={styles.pageContainer}>
      <h1>Educational Details</h1>
      <ul>
        <li>B.Tech in Computer Engineering - 2025</li>
        <li>HSC - 2021</li>
      </ul>
    </div>
  );
}
