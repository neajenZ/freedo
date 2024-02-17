import styles from './auth-module-card.module.scss'
import {useNavigate} from "react-router-dom";


interface IAuthModuleCard {
    headerChildren: React.ReactNode,
    children?: React.ReactNode
}

export const AuthModuleCard = ({headerChildren, children}: IAuthModuleCard) => {

    const navigate = useNavigate()

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.imgBody} />
                <div className={styles.aside}>
                    <div className={styles.auth_header}>
                        <div className={styles.headerTop}>
                            <h4 className={`${styles.titleModule} title`}>
                                Войти в аккаунт
                            </h4>
                            <span className={styles.switch_link} onClick={() => navigate("/")}>
                            На главную
                            </span>
                        </div>
                        <div className={styles.headerBottom}>
                            {headerChildren}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}