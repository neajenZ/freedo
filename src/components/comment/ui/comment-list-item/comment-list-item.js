import styles from "./comment-list-item.module.scss";
const CommentListItem = ({ commentData }) => {
    // @ts-ignore
    const rating = Array(commentData.rate).fill().map((_, i) => i + 1);
    return (<div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.avatar}>
            <img className={styles.img} src={''} alt="alt"/>
          </div>
          <div className={styles.head}>
            <div className={styles.left}>
              <div className={styles.name}>{''}</div>
              <div className={styles.date}>{''}</div>
            </div>
            <div className={styles.right}>
              <div className={`${styles.lang} ${styles.stars}`}>
                <div className={styles.cont}>
                  <img className={styles.langImg} src={''} alt="alt"/>
                </div>
              </div>
              <div className={styles.stars}>
                {rating.map((i) => (<span key={i}>★</span>))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>{commentData.description}</div>
      </div>
    </div>);
};
export default CommentListItem;
