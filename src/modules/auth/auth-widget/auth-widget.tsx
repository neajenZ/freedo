import {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";
import { AuthImage } from "src/shared/assets";
import {
  Box,
  Button,
  Card,
  FacebookIcon,
  GoogleIcon,
  Grid,
} from "src/shared/ui";
import Login from "../login/ui/login";
import Register from "../register/ui/register";
import styles from "./auth-widget.module.scss";
import {SocialBtn} from "src/modules/auth/social-btn/social-btn.tsx";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {changeTypeAuth} from "src/shared/slice/user-slice.ts";

const AuthWidget = () => {
  const [isRegister, setIsRegister] = useState(true);
  const dispatch = useAppDispatch()
  const onAuthSwitch = () => setIsRegister((prev) => !prev);
  const {userSlice} = useAppSelector(state => state)
  const navigate = useNavigate();

  if (userSlice.typeAuth === 'login') {
    return (
        <Card className={styles.auth}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
            </div>
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
                    Войти в аккаунт
                  </h4>
                  <span className={styles.switch_link} onClick={() => navigate("/")}>
              На главную
              </span>
                </div>
                <div className={styles.headerBottom}>
                  <p className="sub_title">
                    Еще нет аккаунта?
                  </p>
                  <button className={styles.switch_link} onClick={() => dispatch(changeTypeAuth('register'))}>
                  Зарегистрироваться
                  </button>
                </div>

              </div>

              <Login />
              <div className={styles.socialWrapper}>
                <SocialBtn
                    name={'Facebook'}
                    icon={<FacebookIcon />}
                />
                <SocialBtn
                    name={'Google'}
                    icon={<GoogleIcon />}
                />
              </div>

              <p className="info">
                При регистрации и входе вы соглашаетесь с <a href="#">условиями использования
                Freedo</a> и <a href="#">политикой обработки данных</a>.
              </p>
            </Grid>
          </div>
        </Card>
    );
  }

  return (
    <div className={styles.auth}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
        </div>
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
                Создай своей аккаунт
              </h4>
              <span className={styles.switch_link} onClick={() => navigate("/")}>
              На главную
              </span>
            </div>
            <div className={styles.headerBottom}>
              <p className="sub_title">
                Уже есть аккаунт?
              </p>
              <button className={styles.switch_link} onClick={() => dispatch(changeTypeAuth('login'))}>
                Войти
              </button>
            </div>

          </div>

          <Register />
          <div className={styles.socialWrapper}>
            <SocialBtn
              name={'Facebook'}
              icon={<FacebookIcon />}
            />
            <SocialBtn
                name={'Google'}
                icon={<GoogleIcon />}
            />
          </div>
          <p className="info">
            При регистрации и входе вы соглашаетесь с <a href="#">условиями использования
            Freedo</a> и <a href="#">политикой обработки данных</a>.
          </p>
        </Grid>
      </div>
    </div>
  );
};

export default AuthWidget;
