import styles from './user-dropdown.module.scss'


interface IUserDropdown {
    id: string,
    name: string,
    lastname: string
}

export const UserDropdown = ({id, lastname, name}: IUserDropdown) => {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h4>@{id}</h4>
                <div className={styles.nameWrapper}>
                    <span>Здравствуйте,       </span>
                    <h3>{name} {lastname}</h3>
                </div>
                <div className={styles.buttonWrapper}>
                    <button>Редактировать профиль</button>
                    <button>Выйти</button>
                </div>

            </div>
        </div>
    )
}