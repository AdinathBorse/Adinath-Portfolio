import styles from '../styles/PageContainer.module.css';
// Dummy Contact Page
export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <h1>Contact Details</h1>
      <p>Email: adinathborse@email.com</p>
      <p>Phone: +91-9763586501</p>
      <p>Location: Pune, India</p>
    </div>
  );
}
