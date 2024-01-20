import styles from './social-btn.module.scss'
import GoogleIcon from "src/shared/ui/icons/GoogleIcon.tsx";
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