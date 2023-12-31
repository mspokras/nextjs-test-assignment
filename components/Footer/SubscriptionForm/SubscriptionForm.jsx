import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  return (
    <form className={styles.subscrForm}>
      <h3 className={styles.subscrTitle}>Join Our Newsletter</h3>
      <div className={styles.credentials}>
        <input type="text" placeholder="Your email address" className={styles.subscrInput} />
        <button className={styles.subscrButton}>Subscribe</button>
      </div>
      <div className={styles.comment}>*&nbsp;&nbsp;Will send you weekly updates for your better tool management.</div>
    </form>
  );
};

export default SubscriptionForm;