import styles from "./ContactForm.module.css";
import customRadioActive from '../../../../public/icons/custom-radio-active.svg';

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formWrapper}>
        <div className={styles.formGroup}>
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className={`${styles.formGroup} ${styles.formRow}`}>
          <div className={styles.subjectsTitle}>Select Subject?</div>
          <div className={styles.subjectsOptions}>
            <label className={styles.customRadio}>
              <input type="radio" name="subject" value="general-inquiry" />
              <span className={styles.customRadioIcon} style={{ backgroundImage: `url(${customRadioActive})` }}></span>
              General Inquiry
            </label>
            <label className={styles.customRadio}>
              <input type="radio" name="subject" value="general-inquiry" />
              <span className={styles.customRadioIcon}></span>
              General Inquiry
            </label>
            <label className={styles.customRadio}>
              <input type="radio" name="subject" value="general-inquiry" />
              <span className={styles.customRadioIcon}></span>
              General Inquiry
            </label>
            <label className={styles.customRadio}>
              <input type="radio" name="subject" value="general-inquiry" />
              <span className={styles.customRadioIcon}></span>
              General Inquiry
            </label>
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.formRow}`}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="1" placeholder="Write your message.."></textarea>
        </div>
        <button className={`${styles.formButton} ${styles.formRow}`}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;