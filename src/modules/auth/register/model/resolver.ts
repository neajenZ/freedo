import { createResolver, createError } from "src/shared/utils";
import { RegisterForm } from "./register-form.types";

export default createResolver<RegisterForm>((values, errors) => {
  if (!values.first_name) errors.first_name = createError("Введите имя");
  if (!values.email) errors.email = createError("Введите почту");
  if (!values.password) errors.password = createError("Введите пароль");

  if (values.password !== values.repeat_password)
    errors.password = createError("Пароли не совпадают");

  return errors;
});
