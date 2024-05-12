import styles from "./user-card.module.scss";
import avatar from './avatar.png'
import { useState} from "react";
import ReCaptcha from 'react-google-recaptcha'
import {useTranslation} from "react-i18next";
import { useAppSelector } from "src/shared/hooks/reduxHooks";


const UserCard = () => {
    const [isCaptcha, setCaptcha] = useState<string | null>()
    const {t} = useTranslation()
    const {userSlice} = useAppSelector(state => state)

    const parseDate = (): string => {
        const userDate = [...userSlice.userData.date_of_registration].map (i => i = Number(i))

        if ((new Date().getFullYear() - userDate[0]) > 0) {
            const num = new Date().getFullYear() - userDate[0]
            return `${num} год на площадке`
        } else if ((new Date().getFullYear() - userDate[0]) === 0) {

            if (((new Date().getMonth() + 1) - userDate[1]) > 0) {
                const num = ((new Date().getMonth() + 1) - userDate[1])
                if (((new Date().getMonth() + 1) - userDate[1]) === 1) {
                    return `${num} месяц на сайте`
                } else {
                    return `${num} месяца на сайте`
                }
            } else {
                return 'Менее месяца на сайте'
            }

        }
        console.log(userDate[0])
        return ''
    }


    return (
        <div className={styles.profile}>
        <div className={styles.headerWrapper}>
            <img className={styles.profile__avatar} src={avatar} alt="Profile Avatar"/>
            <div className={styles.info}>
                <div className={styles.info__top}>
                    <h3 className={styles.name}>{userSlice.userData.first_name} {userSlice.userData.last_name}</h3>
                    {/*<span className={styles.views}>{data.views}</span>*/}
                </div>
                <div onClick={() => console.log(isCaptcha)} className={styles.info__bottom}>
                    <div className={styles.date}>{parseDate()}</div>
                    {/*<LanguageList languages={data.languages} variant={LangView.Popup}/>*/}
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
                            {/*<ContactList contacts={data.contacts} />*/}
                            {/*<PaymentList payments={data.payments} />*/}
                        </>
                    )
                }
            </div>
        </div>

        </div>
  );
};

export default UserCard;
