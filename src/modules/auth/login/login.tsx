import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/auth.api";
import { Button, Input } from "src/shared/ui";
import styles from "./login.module.scss";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit, reset } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    await handleLogin(data);
    reset();
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Input placeholder="Почта" {...register("email")} />
        <Input placeholder="Пароль" {...register("password")} />
        <Button variant="filled">Войти</Button>
      </form>
    </div>
  );
};

export default Login;
