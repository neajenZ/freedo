import styles from './not-found-page.module.scss'
import {LogoIcon} from "src/shared/ui";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.body}>
            <div className={styles.logoWrapper}>
                <LogoIcon />
            </div>
            <div className={styles.wrapper}>
                <h3>404</h3>
                <p>{t('notFoundText')}</p>
                <Link to={'/'}>
                    <button>{t('mainPageText')}</button>
                </Link>
            </div>
        </div>

    )
}

export default NotFoundPage