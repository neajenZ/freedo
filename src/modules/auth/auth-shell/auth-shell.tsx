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
import Register from "../register/register";
import styles from "./auth-shell.module.scss";

const AuthShell = () => {
  const [isRegister, setIsRegister] = useState(true);
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
            <p className="title">Создай свой аккаунт</p>
            <Button
              className={styles.close_btn}
              onClick={() => console.log("closing")}
            >
              <CloseIcon />
            </Button>
          </div>
          <p className="sub_title">
            Уже есть аккаунт?
            <span
              className={styles.switch}
              onClick={() => console.log("switching to")}
            >
              Войти
            </span>
          </p>
          {isRegister ? <Register /> : <p>Login Form</p>}
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
