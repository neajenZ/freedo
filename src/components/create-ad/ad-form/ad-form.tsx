import styles from './ad-form.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {changeCreatedAdRole} from "src/shared/slice/user-slice.ts";
import {CreateAdStatus} from "src/components/create-ad/ad-form/components/choice-status/choice-status.tsx";
import {CreateAdImg} from "src/components/create-ad/ad-form/components/images-loader/image-loader.tsx";
import CurrencyButton from "src/shared/ui/currency/currency-button.tsx";

export const CreateAdForm = () => {
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
    return (
        <div className={styles.formWrapper}>
            <div className={`${styles.formItem} ${styles.roleWrapper}`}>
                <h4>Режим:</h4>
                <div className={styles.buttonWrapper}>

                    <button
                        className={userSlice.createAdInfo.data.type === 'executor' ? styles.active : undefined}
                        onClick={() => dispatch(changeCreatedAdRole('executor'))}
                    >
                        Исполнитель
                    </button>

                    <button
                        className={userSlice.createAdInfo.data.type === 'customer' ? styles.active : undefined}
                        onClick={() => dispatch(changeCreatedAdRole('customer'))}
                    >
                        Заказчик
                    </button>

                </div>
            </div>
            <CreateAdStatus />
            <div className={styles.formItem}>
                <h4>Название:</h4>

                <input type="text" placeholder={'Введите название'}/>
            </div>
            <div className={`${styles.formItem} ${styles.fieldWrapper}`}>
                <h4>Описание:</h4>

                <textarea placeholder={'Введите название'}/>
            </div>
            <CreateAdImg />
            <div className={`${styles.formItem} ${styles.price}`}>
                <h4>Стоимость:</h4>
                <input className={styles.priceInput} placeholder={'Введите стоимость'}/>
                <div className={styles.currencyWrapper}>
                    <CurrencyButton />
                </div>
            </div>
            <div className={styles.formItem}>
                <button className={`${styles.stepBtn} ${styles.prev}`}>Назад</button>
                <button className={`${styles.stepBtn}`}>Далее</button>
            </div>
        </div>
    )
}