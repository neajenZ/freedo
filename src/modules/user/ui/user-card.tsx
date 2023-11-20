import { PaymentList } from "src/components/payment-list";
import { useUserQuery } from "../model/api/user.api";
import { ContactList } from "src/components/contacts-list";
import { UserImage } from "src/shared/assets";
import styles from "./user-card.module.scss";

const UserCard = () => {
  const { data } = useUserQuery();

  if (!data) return;

  return (
    <div className={styles.profile}>
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={UserImage} alt="item" />
        <div className={styles.info}>
          <div className={styles.top}>
            <div className={styles.name}>
              {data.first_name} {data.last_name}
            </div>
            <div className={styles.views}>1K+</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.date}>1 год на площадке</div>
          </div>
        </div>
        <ContactList contacts={data.contacts} />
        <PaymentList payments={data.payments} />
      </div>
    </div>
  );
};

export default UserCard;
