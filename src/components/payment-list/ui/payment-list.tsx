import styles from "./payment-list.module.scss";

type PaymentListProps = {
  payments: string[];
};

const PaymentList = (props: PaymentListProps) => {
  const { payments } = props;
  return (
    <div className={styles.payments}>
      <div className={styles.title}>Платежные системы</div>
      <div className={styles.items}>
        {payments.map((item, index) => (
          <div className={styles.item} key={item}>
            <img key={`${item} ${index}`} src={item} alt="item" />
          </div>
        ))}
        <div className={styles.dots}>...</div>
      </div>
    </div>
  );
};

export default PaymentList;
