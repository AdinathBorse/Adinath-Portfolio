import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Portfolio</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/achievements">Achievements</Link></li>
        <li><Link href="/extra-curricular">Extra Curricular</Link></li>
        <li><Link href="/certifications">Certifications</Link></li>
        <li><Link href="/education">Education</Link></li>
      </ul>
    </nav>
  );
}
