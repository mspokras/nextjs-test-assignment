import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>  
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.navItem} ${styles.featuresLink}`}>
          <Link href="/features">
            Features
            <FontAwesomeIcon icon={faChevronDown} className={styles.chevronDownIcon} />
          </Link>
          <ul className={styles.featuresMenu}>
            <li className={styles.featuresItem}>
              <Link href="/feature1">Feature 1</Link>
            </li>
            <li className={styles.featuresItem}>
              <Link href="/feature2">Feature 2</Link>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;