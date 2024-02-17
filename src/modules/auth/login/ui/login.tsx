import styles from "./login.module.scss";
import {useEffect, useState} from "react";
import {IUserAuth} from "src/app/types/user.ts";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {postUserAuth} from "src/shared/slice/user-slice.ts";
import { useNavigate} from "react-router-dom";
import {getUserData} from "src/shared/slice/Api/getUserData.ts";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";

const Login = () => {
    const {userSlice} = useAppSelector(state => state)
    const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const [isChecked, setChecked] = useState(false)
    const navigate = useNavigate()
    const {t} = useTranslation()

    const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const formData: IUserAuth = {
            email: emailValue,
            password: passwordValue
        }
        dispatch(postUserAuth(formData))
    }

    useEffect(() => {
        if (userSlice.isRedirect === true) {
            dispatch(getUserData(Cookies.get('accessToken')))
            navigate('/')
        }
    }, [userSlice.isRedirect]);

  return (
    <div>
      <form
        className={styles.form}
      >
          <div className="loginForm">
              <div className={styles.inputWrapper}>
                  <input
                      value={emailValue}
                      placeholder={`${t('mail')}`}
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                      value={passwordValue}
                      placeholder={`${t('password')}`}
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
                      <label onClick={() => setChecked(!isChecked)}>{t('savePassText')}
                      </label>
                  </div>
                  <button
                    onClick={() => navigate('/recover-pass')}
                  >
                      {t('recoverPass')}
                  </button>
              </div>

          </div>


        <button onClick={submitForm} className={styles.sendFormBtn}>{t('loginBtn')}</button>
      </form>

        <div className={styles.orTitle}>
            <h4>{t('orText')}</h4>
        </div>
    </div>
  );
};

export default Login;
