import {useUserQuery} from "../model/api/user.api";
import styles from "./user-card.module.scss";
import {LanguageList, LangView} from "../../../components/language-list";
import {ContactList} from "src/components/contacts-list";
import {PaymentList} from "src/components/payment-list";
import avatar from './avatar.png'
import { useState} from "react";
import ReCaptcha from 'react-google-recaptcha'
import {useTranslation} from "react-i18next";
import { useAppSelector } from "src/shared/hooks/reduxHooks";


const UserCard = () => {
  const { data} = useUserQuery();
  const [isCaptcha, setCaptcha] = useState<string | null>()
    const {t} = useTranslation()
    const {userSlice} = useAppSelector(state => state)
  if (!data) return null;

  return (
    <div className={styles.profile}>
        <div className={styles.headerWrapper}>
            <img className={styles.profile__avatar} src={avatar} alt="Profile Avatar"/>
            <div className={styles.info}>
                <div className={styles.info__top}>
                    <h3 className={styles.name}>{userSlice.userData.first_name} {userSlice.userData.last_name}</h3>
                    <span className={styles.views}>{data.views}</span>
                </div>
                <div onClick={() => console.log(isCaptcha)} className={styles.info__bottom}>
                    <div className={styles.date}>{t('countYear.one')}</div>
                    <LanguageList languages={data.languages} variant={LangView.Popup}/>
                </div>
            </div>
        </div>
        <div className={styles.wrapperCont}>
            {
                !isCaptcha ?
                    <div className={styles.captchaWrapper}>
                        <h4>{t('watchContactsText')}</h4>
                        <ReCaptcha
                            onChange={(cap) => setCaptcha(cap)}
                            sitekey={`6LcWNF4pAAAAANUWFGsLFyyNnxSCtyIjxCaqkl7h`}
                        />
                    </div>
                    : null


            }

            <div className={`${styles.contactsWrapper} ${isCaptcha ? styles.activeCon : null}`}>
                {
                    isCaptcha && (
                        <>
                            <ContactList contacts={data.contacts} />
                            <PaymentList payments={data.payments} />
                        </>
                    )
                }
            </div>
        </div>

    </div>
  );
};

export default UserCard;
