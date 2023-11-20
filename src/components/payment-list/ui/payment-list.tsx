import MirIcon from "src/shared/ui/icons/MirIcon";
import styles from "./payment-list.module.scss";
import DiscoverIcon from "src/shared/ui/icons/DiscoverIcon";
import VisaIcon from "src/shared/ui/icons/VisaIcon";
import MasterCardIcon from "src/shared/ui/icons/MasterCardIcon";

type PaymentListProps = {
  payments: string[];
};

enum PaymentType {
  MIR = "MIR",
  DISCOVER = "DISCOVER",
  VISA = "VISA",
  MASTER_CARD = "MASTER_CARD",
}

const paymentConfig: Record<PaymentType, JSX.Element> = {
  [PaymentType.MIR]: <MirIcon />,
  [PaymentType.DISCOVER]: <DiscoverIcon />,
  [PaymentType.VISA]: <VisaIcon />,
  [PaymentType.MASTER_CARD]: <MasterCardIcon />,
};

const PaymentList = (props: PaymentListProps) => {
  const { payments } = props;

  return (
    <div className={styles.payments}>
      <div className={styles.title}>Платежные системы</div>
      <div className={styles.items}>
        {payments.map((item) => (
          <div className={styles.item} key={item}>
            {paymentConfig[item as keyof typeof paymentConfig]}
          </div>
        ))}
        <div className={styles.dots}>...</div>
      </div>
    </div>
  );
};

export default PaymentList;
