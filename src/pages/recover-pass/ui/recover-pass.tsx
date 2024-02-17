import {Card, Grid} from "src/shared/ui";
import {useNavigate} from "react-router-dom";
import styles from './recover-pass.module.scss'
import {useTranslation} from "react-i18next";
const RecoverPassPage = () => {
    const navigate = useNavigate()
    const {t} = useTranslation()
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
                                        {t('forgotPasswordTitle')}
                                    </h4>
                                    <span className={styles.switch_link} onClick={() => navigate("/")}>
                                        На главную
                                    </span>
                                </div>
                                <div className={styles.headerBottom}>
                                    <p className="sub_title">
                                        {t('enterEmailForgotPass')}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.form}>
                                <input type={'text'} placeholder={t('mail')}/>
                                <button>{t('recoverPass')}</button>
                            </div>
                        </Grid>
                    </div>
                </Card>
            </div>
        </div>

    );
}

export default RecoverPassPage