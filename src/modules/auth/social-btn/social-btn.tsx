import styles from './social-btn.module.scss'
import {ReactNode} from "react";
import {useTranslation} from "react-i18next";

interface ISocialBtn {
    name: string,
    icon: ReactNode,
    onclick?: () => void
}

export const SocialBtn = ({name, icon, onclick}:ISocialBtn) => {
    const {t} = useTranslation()
    return (
        <button onClick={onclick} className={styles.body}>
            {icon}
            {t('continueWith')} {name}
        </button>
    )
}