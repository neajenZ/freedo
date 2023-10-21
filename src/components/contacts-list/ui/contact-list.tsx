import styles from "./contact-list.module.scss";

type ContactListProps = {
  contacts: string[];
};

const ContactList = (props: ContactListProps) => {
  const { contacts } = props;
  return (
    <div className={styles.contacts}>
      {contacts.length % 2
        ? contacts.map((item) => (
            <div key={Math.random()} className={styles.odd}>
              {/* перенести из старого проекта note.svg */}
              <img src={""} alt="" />
              <div>{item}</div>
            </div>
          ))
        : contacts.map((item) => (
            <div key={Math.random()} className={styles.even}>
              {/* перенести из старого проекта note.svg */}
              <img src={"note"} alt="" />
              <div>{item}</div>
            </div>
          ))}
    </div>
  );
};

export default ContactList;
