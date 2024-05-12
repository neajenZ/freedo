import styles from "./card.module.scss";
import cls from "classnames";
const Card = (props) => {
    const { className, children, ...otherProps } = props;
    return (<div className={cls(styles.card, className)} {...otherProps}>
      {children}
    </div>);
};
export default Card;
