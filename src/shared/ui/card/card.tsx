import { HTMLAttributes, ReactNode } from "react";
import styles from "./card.module.scss";
import cls from "classnames";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={cls(styles.card, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
