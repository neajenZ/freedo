import styles from "./login.module.scss";
import {useState} from "react";
import {IUserAuth} from "src/app/types/user.ts";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import {postUserAuth} from "src/shared/slice/user-slice.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const [isChecked, setChecked] = useState(false)
    const navigate = useNavigate()
  // const onSubmit = async (data: LoginForm) => {
  //   await handleLogin(data);
  //   reset();
  // };

    const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const formData: IUserAuth = {
            email: emailValue,
            password: passwordValue
        }
        dispatch(postUserAuth(formData))
    }

  return (
    <div>
      <form
        className={styles.form}
      >
          <div className="loginForm">
              <div className={styles.inputWrapper}>
                  <input
                      value={emailValue}
                      placeholder="Почта"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                      value={passwordValue}
                      placeholder="Пароль"
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className={styles.footerForm}>
                  <div className={styles.checkbox}>
                      <input
                          checked={isChecked}
                          type="checkbox"
                          onChange={() => setChecked(true)}
                      />
                      <label onClick={() => setChecked(!isChecked)}>Запомнить пароль</label>
                  </div>
                  <button
                    onClick={() => navigate('/recover-pass')}
                  >
                      Восстановить пароль
                  </button>
              </div>

          </div>


        <button onClick={submitForm} className={styles.sendFormBtn}>Войти</button>
      </form>

        <div className={styles.orTitle}>
            <h4>Или</h4>
        </div>
    </div>
  );
};

export default Login;
