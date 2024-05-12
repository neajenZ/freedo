import classNames from "classnames";
import styles from "./button.module.scss";
const Button = (props) => {
    const { className, children, variant = "outlined", onClick } = props;
    return (<button className={classNames(styles.button, className, styles[variant])} onClick={onClick}>
      {children}
    </button>);
};
export default Button;
