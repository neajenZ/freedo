import styles from './not-found-page.module.scss'
import {LogoIcon} from "src/shared/ui";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.logoWrapper}>
                <LogoIcon />
            </div>
            <div className={styles.wrapper}>
                <h3>404</h3>
                <p>Страница не найдена</p>
                <Link to={'/'}>
                    <button>На главную</button>
                </Link>
            </div>
        </div>

    )
}

export default NotFoundPage