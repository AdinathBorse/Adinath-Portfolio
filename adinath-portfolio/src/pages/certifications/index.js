import styles from '../../styles/PageContainer.module.css';
// Dummy Certifications Page
export default function Certifications() {
  return (
    <div className={styles.pageContainer}>
      <h1>Certifications</h1>
      <ul>
        <li>React Developer - Coursera</li>
        <li>Full Stack Web Dev - Udemy</li>
      </ul>
    </div>
  );
}
