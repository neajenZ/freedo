import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "outlined" | "filled";
}

const Button = (props: ButtonProps) => {
  const { className, children, variant = "outlined" } = props;

  return (
    <button className={classNames(styles.button, className, styles[variant])}>
      {children}
    </button>
  );
};

export default Button;
