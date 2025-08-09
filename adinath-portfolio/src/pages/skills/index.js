import styles from '../../styles/PageContainer.module.css';
// Dummy Skills Page
export default function Skills() {
  return (
    <div className={styles.pageContainer}>
      <h1>Skills</h1>
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
      </ul>
    </div>
  );
}
