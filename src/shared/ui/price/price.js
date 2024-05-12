import styles from "./price.module.scss";
const Price = (props) => {
    const { price, currency = '$' } = props;
    return (<div className={styles.price}><span>{price} {currency} +</span></div>);
};
export default Price;
