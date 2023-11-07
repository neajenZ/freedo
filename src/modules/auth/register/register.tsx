import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/auth.api";
import { RegisterRequest } from "../api/auth-api.types";

type RegisterInputProps = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  repeat_password: string;
};

const Register = () => {
  const { register, handleSubmit, reset } = useForm<RegisterInputProps>();
  const [handleRegister] = useRegisterMutation();

  const onSubmit = async (data: RegisterInputProps) => {
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
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "16px",
        }}
      >
        <input {...register("first_name")} placeholder="Имя" />
        <input {...register("last_name")} placeholder="Фамилия" />
        <input {...register("email")} placeholder="Почта" />
        <input {...register("password")} placeholder="Пароль" />
        <input
          {...register("repeat_password")}
          placeholder="Повторите пароль"
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Register;
