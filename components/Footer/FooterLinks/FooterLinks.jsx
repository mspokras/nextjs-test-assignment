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
        <h3 className={styles.footerTitle}>Reach Us</h3>
        <div className={styles.detailsItem}>
          <div className={styles.iconWrapper}>
            <Image src={phone} alt="phone" className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsLabel}>+1012 3456 789</div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.iconWrapper}>
            <Image src={email} alt="email" className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsLabel}>demo@gmail.com</div>
        </div>
        <div className={styles.detailsItem}>
          <div className={styles.iconWrapper}>
            <Image src={location} alt="location" className={styles.detailsIcon} />
          </div>
          <div className={styles.detailsLabel}>132 Dartmouth Street Boston, <br className={styles.br} />
          Massachusetts 02156 United States</div>
        </div>
      </section>
      <section className={styles.footerSection}>    
        <h3 className={styles.footerTitle}>Company</h3>
        <ul className={styles.footerList}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Legal</h3>
        <ul className={styles.footerList}>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms & Services</Link>
          </li>
          <li>
            <Link href="/">Terms of Use</Link>
          </li>
          <li>
            <Link href="/">Refund Policy</Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Quick Links</h3>
        <ul className={styles.footerList}>
          <li>
            <Link href="/">Techlabz Keybox</Link>
          </li>
          <li>
            <Link href="/">Downloads</Link>
          </li>
          <li>
            <Link href="/">Forum</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FooterLinks;