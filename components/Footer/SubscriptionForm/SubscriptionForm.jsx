import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  return (
    <form className={styles.subscrForm}>
      <title>Join Our Newsletter</title>
      <div className={styles.credentials}>
        <input type="text" placeholder="Your email address"/>
        <button>Subscribe</button>
      </div>
      <div className={styles.comment}>*  Will send you weekly updates for your better tool management.</div>
    </form>
  );
};

export default SubscriptionForm;