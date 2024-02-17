import { useForm } from "react-hook-form";
import { RegisterRequest } from "../../api/auth-api.types";
import { useRegisterMutation } from "../../api/auth.api";
import { RegisterForm } from "../model/register-form.types";
import resolver from "../model/resolver";
import styles from "./register.module.scss";

const Register = () => {
  const {
    handleSubmit,
    reset,
  } = useForm<RegisterForm>({ resolver });
  const [handleRegister] = useRegisterMutation();

  const onSubmit = async (data: RegisterForm) => {
    const preparedData: RegisterRequest = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    };
    await handleRegister(preparedData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrapper}>
            <input className={styles.inputForm} placeholder={'Имя'} type="text"/>
            <input className={styles.inputForm} placeholder={'Фамилия'} type="text"/>
        </div>
        <div className={styles.languageWrapper}>
            <input className={styles.inputForm} placeholder={'Язык'} type="text"/>
            <div className={styles.selectedLanguage}>
                <span>Выбраны:</span>

            </div>
        </div>
        <input className={styles.inputForm} placeholder={'Почта'} type="text"/>
        <div className={styles.inputWrapper}>
            <input className={styles.inputForm} placeholder={'Пароль'} type="text"/>
            <input className={styles.inputForm} placeholder={'Повторите пароль'} type="text"/>
        </div>

        <button className={styles.sendFormBtn}>Зарегистрироваться</button>
    </form>
  );
};

export default Register;
