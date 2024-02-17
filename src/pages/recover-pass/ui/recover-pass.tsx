import {Card, Grid} from "src/shared/ui";
import {useNavigate} from "react-router-dom";
import styles from './recover-pass.module.scss'
const RecoverPassPage = () => {
    const navigate = useNavigate()
    // авыаывва
    return (
        <div className={'container'}>
            <div className={styles.contWrapper}>
                <Card className={styles.auth}>
                    <div className={styles.wrapper}>
                        <div className={styles.imgWrapper} />
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className={styles.auth_header}>
                                <div className={styles.headerTop}>
                                    <h4 className={`${styles.titleModule} title`}>
                                        Восстановление пароля
                                    </h4>
                                    <span className={styles.switch_link} onClick={() => navigate("/")}>
                                        На главную
                                    </span>
                                </div>
                                <div className={styles.headerBottom}>
                                    <p className="sub_title">
                                        Введите адрес почты, на неё прийдет код
                                    </p>
                                </div>
                            </div>
                            <div className={styles.form}>
                                <input type={'text'} placeholder={'Почта'}/>
                                <button>Сбросить текущий пароль</button>
                            </div>
                        </Grid>
                    </div>
                </Card>
            </div>
        </div>

    );
}

export default RecoverPassPage