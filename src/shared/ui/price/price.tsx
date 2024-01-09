import styles from "./price.module.scss"
type PriceProps = {
    price: number;
    currency?: string;
}

const Price = (props:PriceProps) => {
    const {price, currency = '$'} = props;
    return (
        <div className={styles.price}><span>{price} {currency} +</span></div>
    );
};

export default Price;