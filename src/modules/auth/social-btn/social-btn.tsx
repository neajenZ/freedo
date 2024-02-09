import styles from './social-btn.module.scss'
import {ReactNode} from "react";

interface ISocialBtn {
    name: string,
    icon: ReactNode,
    onclick?: () => void
}

export const SocialBtn = ({name, icon, onclick}:ISocialBtn) => {
    return (
        <button onClick={onclick} className={styles.body}>
            {icon}
            Продолжить с {name}
        </button>
    )
}