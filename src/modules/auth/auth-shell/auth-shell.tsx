import { useState } from "react";

import { AuthImage } from "src/shared/assets";
import {
  Box,
  Button,
  Card,
  CloseIcon,
  FacebookIcon,
  GoogleIcon,
  Grid,
} from "src/shared/ui";
import Register from "../register/ui/register";
import styles from "./auth-shell.module.scss";
import Login from "../login/login";
import { useNavigate } from "react-router-dom";

const AuthShell = () => {
  const [isRegister, setIsRegister] = useState(true);
  const onAuthSwitch = () => setIsRegister((prev) => !prev);

  const navigate = useNavigate();

  return (
    <Card className={styles.auth}>
      <Grid container>
        <Grid item xs={6}>
          <img src={AuthImage} />
        </Grid>
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
            <p className="title">
              {isRegister ? "Создай свой аккаунт" : "Войти в аккаунт"}
            </p>
            {/* <Button
              className={styles.close_btn}
              onClick={() => console.log("closing")}
            >
              <CloseIcon />
            </Button> */}
            <span className={styles.switch_link} onClick={() => navigate("/")}>
              На главную
            </span>
          </div>
          <p className="sub_title">
            {isRegister ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
            <span className={styles.switch_link} onClick={onAuthSwitch}>
              {isRegister ? "Войти" : "Зарегистрироваться"}
            </span>
          </p>
          {isRegister ? <Register /> : <Login />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => console.log("Facebook")}>
              <FacebookIcon />
              <p>Продолжить с Facebook</p>
            </Button>
            <Button onClick={() => console.log("Google")}>
              <GoogleIcon />
              <p>Продолжить c Google</p>
            </Button>
          </Box>

          <p className="info">
            При регистрации и входе вы соглашаетесь с условиями использования
            Freedo и политикой обработки данных.
          </p>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AuthShell;
