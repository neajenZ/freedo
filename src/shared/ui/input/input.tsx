import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
}

const Input = (props: InputProps) => {
  const { className, ...otherProps } = props;
  return (
    <input className={classNames(styles.input, className)} {...otherProps} />
  );
};

export default Input;
