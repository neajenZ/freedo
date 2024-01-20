import type {
  DeepRequired,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Resolver,
} from "react-hook-form";

export type FormErrors<T> = {
  [PropertyKey in keyof T]: {
    type: string;
    message: string;
  };
};

export const createResolver = <T extends FieldValues>(
  handleErrors: (
    values: T,
    errors: Partial<FieldErrorsImpl<DeepRequired<T>>>
  ) => FieldErrors<T>
): Resolver<T> => {
  return (values) => ({
    values,
    errors: handleErrors(values, {}),
  });
};

export const createError = (message: string) => ({
  type: "required",
  message,
});
