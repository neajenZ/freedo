import { useNavigate } from "react-router-dom";
import { FacebookIcon, GoogleIcon, Grid, } from "src/shared/ui";
import styles from "./auth-widget.module.scss";
import { SocialBtn } from "src/modules/auth/social-btn/social-btn.tsx";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import { changeTypeAuth } from "src/shared/slice/user-slice.ts";
import { useTranslation } from "react-i18next";
import { PoliticyText } from "src/shared/ui/politicy-text/politicy-text.tsx";
import { useEffect, useRef } from "react";
const AuthWidget = () => {
    const telegramWrapperRef = useRef(null);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { userSlice } = useAppSelector(state => state);
    const navigate = useNavigate();
    const onTelegramAuth = (user) => {
        alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
    };
    window.TelegramLoginWidget = {
        dataOnauth: (user) => console.log(user),
    };
    useEffect(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://telegram.org/js/telegram-widget.js?22';
        scriptElement.setAttribute('data-telegram-login', 'freedobot');
        scriptElement.setAttribute('data-size', 'large');
        scriptElement.setAttribute('data-auth-url', 'paste-redirect-url');
        scriptElement.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");
        scriptElement.async = true;
        telegramWrapperRef?.current?.appendChild(scriptElement);
    }, []);
    return (<div className={styles.auth}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
        </div>
        <Grid item xs={6} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
          <div className={styles.auth_header}>
            <div className={styles.headerTop}>
              <h4 className={`${styles.titleModule} title`}>
                {userSlice.typeAuth === 'login' ? t('loginBtn') : t('regBtn')}
              </h4>
              <span className={styles.switch_link} onClick={() => navigate("/")}>
              На главную
              </span>
            </div>
            <div className={styles.headerBottom}>
              <p className="sub_title">
                {userSlice.typeAuth === 'login' ? t('authPage.signUpTitle') : t('authPage.signInTitle')}
              </p>
                {userSlice.typeAuth === 'login' ?
            <button className={styles.switch_link} onClick={() => dispatch(changeTypeAuth('register'))}>{t('regBtn')}</button> :
            <button className={styles.switch_link} onClick={() => dispatch(changeTypeAuth('login'))}>{t('loginBtn')}</button>}
            </div>
          </div>
          <div ref={telegramWrapperRef}></div>
          <div className={styles.socialWrapper}>
            <SocialBtn name={'Facebook'} icon={<FacebookIcon />}/>
            <SocialBtn name={'Google'} icon={<GoogleIcon />}/>
          </div>
          <PoliticyText />
        </Grid>
      </div>
    </div>);
};
export default AuthWidget;
