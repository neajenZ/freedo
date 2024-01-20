import styles from './choice-type-modal.module.scss'
import GoogleIcon from "src/shared/ui/icons/GoogleIcon.tsx";
import FacebookIcon from "src/shared/ui/icons/FacebookIcon.tsx";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import {changeTypeAuth} from "src/shared/slice/user-slice.ts";

export const ChoiceTypeModal = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.imgBody}>
                </div>

                <div className={styles.aside}>
                    <div className={styles.header}>
                        <h3>Создай свой аккаунт</h3>
                        <div className={styles.typeAuthWrapper}>
                            <p>Уже есть аккаунт?</p>
                            <button
                                onClick={() => dispatch(changeTypeAuth('login'))}
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <button
                            onClick={() => dispatch(changeTypeAuth('register'))}
                            className={styles.fullWidth}
                        >
                            Продолжить с Mail
                        </button>
                        <button>
                            <GoogleIcon />
                            Продолжить с Google
                        </button>
                        <button>
                            <FacebookIcon />
                            Продолжить с Facebook
                        </button>
                    </div>

                    <p className={styles.politicyText}>
                        При регистрации и входе вы соглашаетесь с <a href="#">условиями использования</a> Freedo и <a
                        href="#">политикой обработки</a> данных.
                    </p>
                </div>
            </div>
        </div>
    )
}