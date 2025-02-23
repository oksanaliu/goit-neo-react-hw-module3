import styles from './Contact.module.css';

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <div className={styles.leftSection}>
        <img src="/icons/person.svg" alt="User Icon" className={styles.icon} />
        <p className={styles.name}>{contact.name}</p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.phoneInfo}>
          <img
            src="/icons/phone.svg"
            alt="Phone Icon"
            className={styles.icon}
          />
          <p className={styles.number}>{contact.number}</p>
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
