import React from "react";
import { useLoginMutation } from "../api/auth.api";
import { useForm } from "react-hook-form";
// пропсы компонента пишем через типы TypeScript
type LoginProps = {
  randomProp: string;
};

//  этот тип должен соответсвовать типу, который мы посылаем на бек (нужно посмотреть в свагере)
type LoginForm = {
  email: string;
  password: string;
};

const Login = (props: LoginProps) => {
  // делаем деструктуризацию пропсов (свойств/параметров)
  // @ts-ignore
  const { randomProp } = props;

  const [handleLogin, result] = useLoginMutation();

  // тут нужно сделать валидацию полей, обработку ошибок
  // можно глянуть пример https://react-hook-form.com/get-started
  const { handleSubmit } = useForm<LoginForm>();

  const onSubmit = async () => {
    await handleLogin();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Submit</button>
    </form>
  );
};

export default Login;
