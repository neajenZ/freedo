import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
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
    <div>
      <input className={classNames(styles.input, className)} {...otherProps} />
    </div>
  );
};

export default Input;
