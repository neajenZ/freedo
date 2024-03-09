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
  console.log(error)
  return (
    <div className={styles.wrapper}>
      <input
        className={classNames(styles.input, className, {
          [styles.border_error]: error,
        })}
        {...otherProps}
      />
      {!error ? null : <span className="error">{error.message}</span>}
    </div>
  );
};

export default Input;
