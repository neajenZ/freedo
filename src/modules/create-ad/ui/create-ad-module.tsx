import styles from './create-ad-module.module.scss'
import {CloseIcon} from "src/shared/ui";


interface ICreateAdModule {
    children: React.ReactNode
}

export const CreateAdModule = ({children}: ICreateAdModule) => {
    return (
        <div className="container">
            <div className={styles.body}>
                <header className={styles.header}>
                    <h3>Выберите подкатегорию</h3>
                    <CloseIcon />
                </header>

                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
}