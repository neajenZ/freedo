import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
}
const Card = (props: CardProps) => {
  const { children } = props;
  return <div className={styles.card}>{children}</div>;
};

export default Card;
