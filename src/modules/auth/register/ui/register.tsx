import { useForm } from "react-hook-form";
import { RegisterRequest } from "../../api/auth-api.types";
import { useRegisterMutation } from "../../api/auth.api";
import { RegisterForm } from "../model/register-form.types";
import resolver from "../model/resolver";
import styles from "./register.module.scss";
import {useTranslation} from "react-i18next";
import api from "src/app/api/api.ts";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const {
    // register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<RegisterForm>({ resolver });
  const {t} = useTranslation()
    const navigate = useNavigate()

  const onSubmit = async (data: RegisterForm) => {
    const preparedData: RegisterRequest = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    };
    await api.user.registration(preparedData)
        .then(() => {
            navigate('/')
        })
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrapper}>
            <input className={styles.inputForm} placeholder={`${t('firstname')}`} type="text"/>
            <input className={styles.inputForm} placeholder={`${t('lastname')}`} type="text"/>
        </div>
        <div className={styles.languageWrapper}>
            <input className={styles.inputForm} placeholder={`${t('customerNavigate.languageBtn')}`} type="text"/>
            <div className={styles.selectedLanguage}>
                <span>{t('selectedText')}:</span>

            </div>
        </div>
        <input className={styles.inputForm} placeholder={`${t('mail')}`} type="text"/>
        <div className={styles.inputWrapper}>
            <input className={styles.inputForm} placeholder={`${t('password')}`} type="text"/>
            <input className={styles.inputForm} placeholder={`${t('confirmPass')}`} type="text"/>
        </div>

        <button className={styles.sendFormBtn}>{`${t('regBtn')}`}</button>
    </form>
  );
};

export default Register;
