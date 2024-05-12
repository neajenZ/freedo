import classNames from "classnames";
import styles from "./input.module.scss";
const Input = (props) => {
    const { className, error, ...otherProps } = props;
    console.log(error);
    return (<div className={styles.wrapper}>
      <input className={classNames(styles.input, className, {
            [styles.border_error]: error,
        })} {...otherProps}/>
      {!error ? null : <span className="error">{error.message}</span>}
    </div>);
};
export default Input;
