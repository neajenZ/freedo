import styles from "./contact-list.module.scss";
import {SocialIcon} from "src/shared/ui";

type ContactListProps = {
  contacts: string[];
};

const ContactList = (props: ContactListProps) => {
  const { contacts } = props;
  return (
    <div className={styles.contacts}>
      {contacts.map((item, i) => (
            <button key={`${item}-${i}`} className={`${styles.contacts__item} ${contacts.length % 2 && styles.contacts__item_odd}`}>
              {/* перенести из старого проекта note.svg */}
              <SocialIcon/>
              <h4 className={styles.contacts__social}>{item}</h4>
            </button>
          ))}
    </div>
  );
};

export default ContactList;
