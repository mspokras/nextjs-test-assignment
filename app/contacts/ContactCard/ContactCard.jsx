import styles from "./ContactCard.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactInformation from "./ContactInformation/ContactInformation";
import papership from "../../../public/images/papership.png"
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.cardSections}>
        <ContactInformation />
        <ContactForm />
      </div>
      <Image src={papership} alt="Papership" className={styles.shipImg} />
    </div>
  );
};

export default ContactCard;