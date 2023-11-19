import { useForm } from "react-hook-form";
import { Button, Input } from "src/shared/ui";
import { RegisterRequest } from "../../api/auth-api.types";
import { useRegisterMutation } from "../../api/auth.api";
import { RegisterForm } from "../model/register-from.types";
import resolver from "../model/resolver";
import styles from "./register.module.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
      <Input
        {...register("first_name", { required: true })}
        placeholder="Имя"
        error={errors.first_name}
      />
      <span className="error">{errors.first_name?.message}</span>
      <Input
        {...register("last_name", { required: true })}
        placeholder="Фамилия"
      />
      <span className="error">{errors.last_name?.message}</span>
      <Input {...register("email", { required: true })} placeholder="Почта" />
      <span className="error">{errors.email?.message}</span>
      <Input
        {...register("password", { required: true })}
        placeholder="Пароль"
      />
      <span className="error">{errors.password?.message}</span>
      <Input
        {...register("repeat_password", { required: true })}
        placeholder="Повторите пароль"
      />
      <span className="error">{errors.repeat_password?.message}</span>
      <Button variant="filled" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default Register;
