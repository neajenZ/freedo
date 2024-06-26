import {useUserQuery} from "../model/api/user.api";
import styles from "./user-card.module.scss";
import {LanguageList, LangView} from "../../../components/language-list";
import {ContactList} from "src/components/contacts-list";
import {PaymentList} from "src/components/payment-list";
import avatar from './avatar.png'


const UserCard = () => {
  const { data} = useUserQuery();

  if (!data) return null;

  return (
    <div className={styles.profile}>
        <div className={styles.headerWrapper}>
            <img className={styles.profile__avatar} src={avatar} alt="Profile Avatar"/>
            <div className={styles.info}>
                <div className={styles.info__top}>
                    <h3 className={styles.name}>{data.first_name} {data.last_name}</h3>
                    <span className={styles.views}>{data.views}</span>
                </div>
                <div className={styles.info__bottom}>
                    <div className={styles.date}>1 год на площадке</div>
                    <LanguageList languages={data.languages} variant={LangView.Popup}/>
                </div>
            </div>
        </div>
        <ContactList contacts={data.contacts} />
        <PaymentList payments={data.payments} />
    </div>
  );
};

export default UserCard;
