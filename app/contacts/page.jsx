export const metadata = {
  title: "Contact | NextJS Assignment",
};

import styles from "./styles.module.css";
import ContactInformation from "./ContactInformation/ContactInformation";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  //ИСПРАВИТЬ ЕСЛИ ВЫБРАН NAV ТО ЖИРНЫЙ, УБРАТЬ BORDER тогда
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <h4>Any question or remarks? Just write us a message!</h4>
      </div>
      <div className={styles.contactCard}>
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  )
}