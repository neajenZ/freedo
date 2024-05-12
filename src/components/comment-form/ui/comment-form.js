import styles from "./comment-form.module.scss";
import PhotoLoader from "./photo-loader";
import Stars from "./stars";
const CommentForm = () => (<div className={styles.main}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>Оценка и отзыв</div>
        <div className={styles.exit}></div>
      </div>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.titleItem}>Оценка</div>
          <Stars />
        </div>
        <div className={styles.block}>
          <div className={styles.titleItem}>Комментарий</div>
          <div className={styles.clue}>
            <textarea className={styles.area} placeholder="В тексте не должно быть оскрблений"></textarea>
            <div className={styles.text}>От 5 до 590 символов</div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.titleItem}>Фотография</div>
          <div className={styles.clue}>
            <PhotoLoader />
            <div className={styles.text}>
              Это необязательно, но с ними отзыв станет более наглядным
            </div>
          </div>
        </div>
      </div>
      <button>Оставить отзыв</button>
    </div>
  </div>);
export default CommentForm;
