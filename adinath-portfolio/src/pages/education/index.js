import styles from '../../styles/PageContainer.module.css';
// Dummy Education Page
export default function Education() {
  return (
    <div className={styles.pageContainer}>
  <h1>Educational Details</h1>
  <h2>Education</h2>
  <p><strong>Bachelor of Science in Computer Science</strong>, MIT collage ,Pune<br/> CGPA : 8.80/10 <br/><span className="date">Aug 2023 – May 2026</span></p>
  <p><strong>HSC (12th), Science Stream </strong></p>
  <p>Bhairavnath Junior College, Pune – Maharashtra State Board , <br/>Percentage: 65.15%<br/><span className="date"> Aug 2021– May 2022</span></p>
  <p><strong>SSC (10th) </strong> </p>
  <p>Bhairavnath Shool, Pune – Maharashtra State Board ,<br/> Percentage: 92.15%<br/><span className="date"> June 2019– Mar 2020</span></p>
    </div>
  );
}
