import { LanguageList } from "src/components/language-list";
import { PaymentList } from "src/components/payment-list";
import { SkillList } from "src/components/skill-list";
import { fetchUser } from "../model/api/user.api";
import { ContactList } from "src/components/contacts-list";
import styles from "./user-card.module.scss";

const UserCard = (props: { user: string }) => {
  const { user } = props;
  const { avatar, name, date, skills, views, languages, contacts, payments } =
    fetchUser(user);

  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={avatar} alt="item" />
        <div className={styles.info}>
          <div className={styles.top}>
            <div className={styles.name}>{name}</div>
            <div className={styles.views}>{views > 999 ? "1K+" : views}</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.date}>{date}</div>
            <LanguageList languages={languages} />
          </div>
        </div>
        <ContactList contacts={contacts} />
        <PaymentList payments={payments} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
};

export default UserCard;
