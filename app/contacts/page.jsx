export const metadata = {
  title: "Contact | NextJS Assignment",
};

import styles from "./styles.module.css";
import ContactCard from "./ContactCard/ContactCard";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <h4 className={styles.contactSubtitle}>Any question or remarks? Just write us a message!</h4>
      </div>
      <ContactCard />
    </div>
  )
}