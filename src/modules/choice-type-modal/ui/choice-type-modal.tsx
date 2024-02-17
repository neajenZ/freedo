import styles from './choice-type-modal.module.scss'
import GoogleIcon from "src/shared/ui/icons/GoogleIcon.tsx";
import FacebookIcon from "src/shared/ui/icons/FacebookIcon.tsx";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import {changeTypeAuth} from "src/shared/slice/user-slice.ts";
import {Trans, useTranslation} from "react-i18next";
import {SocialBtn} from "src/modules/auth/social-btn/social-btn.tsx";
import {PoliticyText} from "src/shared/ui/politicy-text/politicy-text.tsx";


export const ChoiceTypeModal = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.imgBody}>
                </div>

                <div className={styles.aside}>
                    <div className={styles.header}>
                        <h3>Создай свой аккаунт</h3>
                        <div className={styles.typeAuthWrapper}>
                            <p>{t('authPage.signInTitle')}</p>
                            <button
                                onClick={() => dispatch(changeTypeAuth('login'))}
                            >
                                {t('loginBtn')}
                            </button>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <button
                            onClick={() => dispatch(changeTypeAuth('register'))}
                            className={styles.fullWidth}
                        >
                            {t('continueWith')} Mail
                        </button>
                        <SocialBtn
                            name={'Facebook'}
                            icon={<FacebookIcon />}
                        />
                        <SocialBtn
                            name={'Google'}
                            icon={<GoogleIcon />}
                        />
                    </div>

                    <PoliticyText />
                </div>
            </div>
        </div>
    )
}