import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";

import phone from "../../../../public/icons/phone.svg";
import email from "../../../../public/icons/letter.svg";
import location from "../../../../public/icons/location.svg";
import circles from "../../../../public/images/circles.png"
import styles from "./ContactInformation.module.css";

const ContactInformation = () => {
  return (
    <section className={styles.contactInfo}>
      <h2 className={styles.infoTitle}>Contact Information</h2>
      <h4 className={styles.infoSubtitle}>Say something to start a live chat!</h4>
      <div className={styles.details}>
        <div className={styles.detailsGroup}>
          <div className={styles.detailsImg}>
            <Image src={phone} alt="phone" className={styles.phoneIcon} />
          </div>
          <div className={styles.phoneLabel}>+1012 3456 789</div>
        </div>
        <div className={styles.detailsGroup}>
          <div className={styles.detailsImg}>
            <Image src={email} alt="email" className={styles.emailIcon} />
          </div>
          <div className={styles.emailLabel}>demo@gmail.com</div>
        </div>
        <div className={styles.detailsGroup}>
          <div className={styles.detailsImg}>
            <Image src={location} alt="location" className={styles.locationIcon} />
          </div>
          <div className={styles.locationLabel}>132 Dartmouth Street Boston, <br />Massachusetts 02156 United States</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.detailsIcon}>
          <FontAwesomeIcon
            className={styles.twitterIcon}
            icon={faTwitter}
          />
        </div>
        <div className={styles.detailsIcon}>
          <FontAwesomeIcon
            className={styles.instagramIcon}
            icon={faInstagram}
          />
        </div>
        <div className={styles.detailsIcon}>
          <FontAwesomeIcon
            className={styles.discordIcon}
            icon={faDiscord}
          />
        </div>
      </div>
      <Image src={circles} alt="Circles" className={styles.circImg} />
    </section>
  );
};

export default ContactInformation;