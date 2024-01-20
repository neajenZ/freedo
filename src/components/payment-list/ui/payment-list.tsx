
import styles from "./payment-list.module.scss";
import {MirIcon, DiscoverIcon, MasterCardIcon, VisaIcon} from "src/shared/ui";
import {useState} from "react";
import {Button} from "src/shared/ui";

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
    const [showAllPayments, setShowAllPayments] = useState(true);
    const preparePayments = showAllPayments && payments.length > 6 ? payments.slice(0, 5) : payments;
  return (
      <div className={styles.container}>
        <h4 className={styles.container__title}>Платёжные системы</h4>
          <div className={styles.payments}>
              {preparePayments.map((item,i) => (
                  <div className={styles.payments__pay} key={`${item}-${i}`}>
                      {paymentConfig[item as keyof typeof paymentConfig]}
                  </div>
              ))}
              {payments.length > 6 &&
                  <Button onClick={() => setShowAllPayments(!showAllPayments)}
                          className={styles.payments__showBtn}>{showAllPayments ? `+${payments.length - preparePayments.length }` : '^^^'}</Button>}
          </div>
      </div>
  );
};

export default PaymentList;
