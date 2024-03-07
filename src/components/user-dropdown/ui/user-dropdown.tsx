import styles from './user-dropdown.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import Cookies from "js-cookie";
import {setLogout} from "src/shared/slice/user-slice.ts";


interface IUserDropdown {
    setVisible: () => void
}

export const UserDropdown = ({setVisible}: IUserDropdown) => {
    const {userSlice} = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    const logout = () => {
        Cookies.remove('refreshToken')
        Cookies.remove('accessToken')
        setVisible()
        dispatch(setLogout())
    }

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h4>@{userSlice.userData.id}</h4>
                <div className={styles.nameWrapper}>
                    <span>Здравствуйте,       </span>
                    <h3>{userSlice.userData.first_name} {userSlice.userData.last_name}</h3>
                </div>
                <div className={styles.buttonWrapper}>
                    <button>Редактировать профиль</button>
                    <button
                        onClick={logout}
                        className={styles.btnLogout}
                    >
                        Выйти
                    </button>
                </div>

            </div>
        </div>
    )
}