export const metadata = {
  title: "Contact | NextJS Assignment",
};

import styles from "./styles.module.css";
import ContactInformation from "./ContactInformation/ContactInformation";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1 className={styles.headerTitle}>Contact Us</h1>
        <h4 className={styles.headerSubtitle}>Any question or remarks? Just write us a message!</h4>
      </div>
      <div className={styles.contactCard}>
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  )
}