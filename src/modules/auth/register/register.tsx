import { useForm } from "react-hook-form";
import { Button, Input } from "src/shared/ui";
import { RegisterRequest } from "../api/auth-api.types";
import { useRegisterMutation } from "../api/auth.api";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Input {...register("first_name")} placeholder="Имя" />
      <Input {...register("last_name")} placeholder="Фамилия" />
      <Input {...register("email")} placeholder="Почта" />
      <Input {...register("password")} placeholder="Пароль" />
      <Input {...register("repeat_password")} placeholder="Повторите пароль" />
      <Button variant="filled" type="submit">
        Войти
      </Button>
    </form>
  );
};

export default Register;
