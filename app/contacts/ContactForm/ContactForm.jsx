import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" id="first_name" />
      </div>
      <div className={styles.formGroup}>
        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" id="last_name" />
      </div>
      <div className={styles.formGroup}>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className={styles.formGroup}>
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" id="phone" />
      </div>
      <div className={styles.formGroup}>
        <div className={styles.subjectsTitle}>Select Subject?</div>
        <div className={styles.subjectsOptions}>
          <label>
            <input type="radio" name="subject" value="general-inquiry" />
            General Inquiry
          </label>
          <label>
            <input type="radio" name="subject" value="general-inquiry" />
            General Inquiry
          </label>
          <label>
            <input type="radio" name="subject" value="general-inquiry" />
            General Inquiry
          </label>
          <label>
            <input type="radio" name="subject" value="general-inquiry" />
            General Inquiry
          </label>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="1" placeholder="Write your message.."></textarea>
      </div>
      <button className={styles.formButton}>Send Message</button>
    </form>
  );
};

export default ContactForm;