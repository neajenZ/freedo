import styles from "./client.module.scss";

const Client = () => {
  return (
    <div className={styles.clientCard}>
      <div>Имя заказчика</div>
      <div>Требования</div>
      <div>Доп информация</div>
    </div>
  );
};

export default Client;
