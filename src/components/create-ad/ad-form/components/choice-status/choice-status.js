import styles from "src/components/create-ad/ad-form/ad-form.module.scss";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import { createdAdStatus } from "src/shared/slice/user-slice.ts";
export const CreateAdStatus = () => {
    const dispatch = useAppDispatch();
    const { userSlice } = useAppSelector(state => state);
    const choiceStatus = (e) => {
        if (userSlice.createAdInfo.data.status === null) {
            dispatch(createdAdStatus(e.currentTarget.innerText));
        }
        if (userSlice.createAdInfo.data.status === e.currentTarget.innerText) {
            dispatch(createdAdStatus(null));
        }
        if (userSlice.createAdInfo.data.status !== e.currentTarget.innerText) {
            dispatch(createdAdStatus(e.currentTarget.innerText));
        }
    };
    return (<div className={styles.formItem}>
            <h4 onClick={() => console.log(userSlice.createAdInfo.data.status)}>Статус:</h4>
            <div className={styles.buttonWrapper}>
                {/*Подумать над логикой класса Active*/}
                <button className={`${styles.statusBtn} ${userSlice.createAdInfo.data.status === 'Ищу постоянную работу' ? styles.active : ''}`} onClick={choiceStatus}>
                    Ищу постоянную работу
                </button>

                <button className={`${styles.statusBtn} ${userSlice.createAdInfo.data.status === 'Ищу стажировку' ? styles.active : ''}`} onClick={choiceStatus}>
                    Ищу стажировку
                </button>

                <button className={`${styles.statusBtn} ${userSlice.createAdInfo.data.status === 'Сотрудничество попроектно' ? styles.active : ''}`} onClick={choiceStatus}>
                    Сотрудничество попроектно
                </button>
            </div>
        </div>);
};
