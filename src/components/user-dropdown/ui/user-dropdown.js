import styles from './user-dropdown.module.scss';
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import Cookies from "js-cookie";
import { setLogout } from "src/shared/slice/user-slice.ts";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
export const UserDropdown = ({ setVisible }) => {
    const { userSlice } = useAppSelector(state => state);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove('refreshToken');
        Cookies.remove('accessToken');
        setVisible();
        dispatch(setLogout());
    };
    return (<div className={styles.body}>
            <div className={styles.wrapper}>
                <h4>@{userSlice.userData.id}</h4>
                <div className={styles.nameWrapper}>
                    <span>{t('hello')},       </span>
                    <h3>{userSlice.userData.first_name} {userSlice.userData.last_name}</h3>
                </div>
                <div className={styles.buttonWrapper}>
                    <button onClick={() => {
            setVisible();
            navigate('/profile');
        }}>
                        {t('editProfile')}
                    </button>
                    <button onClick={logout} className={styles.btnLogout}>
                        {t('quit')}
                    </button>
                </div>

            </div>
        </div>);
};
