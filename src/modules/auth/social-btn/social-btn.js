import styles from './social-btn.module.scss';
import { useTranslation } from "react-i18next";
export const SocialBtn = ({ name, icon, onclick }) => {
    const { t } = useTranslation();
    return (<button onClick={onclick} className={styles.body}>
            {icon}
            {t('continueWith')} {name}
        </button>);
};
