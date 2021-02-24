import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isHamburgerClosed, setIsHamburgerClosed] = useState(true);
  const handleClick = () => {
    setIsHamburgerClosed(!isHamburgerClosed);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <p>
          <Link href="/">Logo</Link>
        </p>
      </div>
      <div className={styles.hamburger} onClick={handleClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={isHamburgerClosed ? styles.navLinks : styles.navLinksShow}>
        <li className={styles.navLink}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/">Contact</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};
