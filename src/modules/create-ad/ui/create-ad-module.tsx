import styles from './create-ad-module.module.scss'


interface ICreateAdModule {
    children: React.ReactNode
}

export const CreateAdModule = ({children}: ICreateAdModule) => {
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <h3>Выберите подкатегорию</h3>
                <button>Закрыть</button>
            </header>

            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    )
}