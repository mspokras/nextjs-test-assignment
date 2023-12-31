import Link from "next/link";

import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}><Link href="/">Logo Here</Link></div>
      <div className={styles.footerContent}>
        <FooterLinks />
        <SubscriptionForm />
      </div>
    </footer>
  );
};

export default Footer;