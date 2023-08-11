import Image from "next/image";
import Link from "next/link";
import phone from "../../../public/icons/phone.svg";
import email from "../../../public/icons/letter.svg";
import location from "../../../public/icons/location.svg";

import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <section className={styles.footerSection}>
        <div className={styles.detailsPhone}>
          <Image src={phone} alt="phone" className={styles.phoneIcon} />
          <div className={styles.phoneLabel}>+1012 3456 789</div>
        </div>
        <div className={styles.detailsEmail}>
          <Image src={email} alt="email" className={styles.emailIcon} />
          <div className={styles.emailLabel}>demo@gmail.com</div>
        </div>
        <div className={styles.detailsLocation}>
          <Image src={location} alt="location" className={styles.locationIcon} />
          <div className={styles.locationLabel}>132 Dartmouth Street Boston, <br />Massachusetts 02156 United States</div>
        </div>
      </section>
      <section className={styles.footerSection}>    
        <div className={styles.footerListTitle}>Company</div>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerSection}>
        <div className={styles.footerListTitle}>Legal</div>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/">Terms & Services</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/">Terms of Use</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/">Refund Policy</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerSection}>
        <div className={styles.footerListTitle}>Quick Links</div>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <Link href="/">Techlabz Keybox</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/">Downloads</Link>
          </li>
          <li className={styles.footerItem}>
            <Link href="/">Forum</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FooterLinks;