import { TComment } from "../../model/types/comment.types";
import { starsCatalog } from "src/shared/utils/stars-catalog";
import styles from "./comment-list-item.module.scss";

const CommentListItem = (props: TComment) => {
  const { name, date, stars, text, language, avatar } = props;
  const starsString = starsCatalog(stars);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img className={styles.img} src={avatar} alt="alt" />
          </div>
          <div className={styles.head}>
            <div className={styles.left}>
              <div className={styles.name}>{name}</div>
              <div className={styles.date}>{date}</div>
            </div>
            <div className={styles.right}>
              <div className={`${styles.lang} ${styles.stars}`}>
                <div className={styles.cont}>
                  <img className={styles.langImg} src={language} alt="alt" />
                </div>
              </div>
              <div className={styles.stars}>{starsString}</div>
            </div>
          </div>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default CommentListItem;
