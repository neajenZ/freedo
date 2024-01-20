import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styles from "./input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  error?: FieldError;
}

const Input = (props: InputProps) => {
  const { className, error, ...otherProps } = props;
  return (
    <>
      <input
        className={classNames(styles.input, className, {
          [styles.border_error]: error?.message,
        })}
        {...otherProps}
      />
      {error && <span className="error">{error.message}</span>}
    </>
  );
};

export default Input;
