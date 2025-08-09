import styles from '../../styles/PageContainer.module.css';
// Dummy Extra Curricular Page
export default function ExtraCurricular() {
  return (
    <div className={styles.pageContainer}>
      <h1>Extra Curricular Activities</h1>
      <ul>
        <li>Football Team Captain</li>
        <li>Volunteer - NGO</li>
      </ul>
    </div>
  );
}
