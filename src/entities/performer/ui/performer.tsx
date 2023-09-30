import styles from "./performer.module.scss";

const Performer = () => {
  return (
    <div className={styles.performerCard}>
      <div>Имя исполнителя</div>
      <div>Опыт</div>
      <div>Доп информация</div>
    </div>
  );
};

export default Performer;
