import styles from "./register.module.scss";
import { useTranslation } from "react-i18next";
import api from "src/app/api/api.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onSubmit'
    });
    const [repeatPassword, setRepeatPass] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleOk = async (values) => {
        if (repeatPassword !== values.password) {
            return alert('Пароли не совпадают!');
        }
        await api.user.registration(values)
            .then((res) => {
            console.log(res);
            alert('Вы успешно зарегистрировали свой аккаунт');
            navigate('/');
        })
            .catch((e) => {
            alert('Произошла ошибка пожалуйста повторите попытку позже');
            console.log('register error: ', e);
        });
    };
    return (<form onSubmit={handleSubmit(handleOk)} className={styles.form}>
        <div className={styles.inputWrapper}>
          <div className={styles.bodyInput}>
            <input {...register('first_name', {
        required: 'Поле обязательно к заполнению'
    })} className={styles.inputForm} placeholder={`${t('firstname')}`} type="text"/>
            {errors.first_name && <p className="error">{errors?.first_name?.message ?? 'Ошибка валидации'}</p>}
          </div>
          <div className={styles.bodyInput}>
            <input {...register('last_name', {
        required: 'Поле обязательно к заполнению'
    })} className={styles.inputForm} placeholder={`${t('lastname')}`} type="text"/>
            {errors.last_name && <p className="error">{errors?.last_name?.message ?? 'Ошибка валидации'}</p>}
          </div>
        </div>
        <div className={styles.languageWrapper}>
            <input className={styles.inputForm} placeholder={`${t('customerNavigate.languageBtn')}`} type="text"/>
            <div className={styles.selectedLanguage}>
                <span>{t('selectedText')}:</span>
            </div>
        </div>
        <div className={styles.bodyInput}>
            <input className={styles.inputForm} placeholder={`${t('mail')}`} type="text" {...register('email', {
        required: 'Почта обязательна',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Пожалуйста введите корректную почту',
        }
    })}/>
            {errors.email && <p className="error">{errors?.email?.message ?? 'Ошибка валидации'}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.bodyInput}>
              <input {...register('password', {
        required: 'Поле обязательно к заполнению',
        minLength: {
            value: 6,
            message: 'Минимум 6 символов'
        }
    })} className={styles.inputForm} placeholder={`${t('password')}`} type="text"/>
              {errors.password && <p className="error">{errors?.password?.message ?? 'Ошибка валидации'}</p>}
          </div>
          <div className={styles.bodyInput}>
            <input className={styles.inputForm} placeholder={`${t('confirmPass')}`} type="text" value={repeatPassword} onChange={(e) => setRepeatPass(e.target.value)}/>
          </div>
            
        </div>

        <input type="submit" className={styles.sendFormBtn} value={t('regBtn')}/>
            
    </form>);
};
export default Register;
