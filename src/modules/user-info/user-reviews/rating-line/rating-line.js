import styles from './rating-line.module.scss';
export const RatingLine = ({ title, count }) => {
    return (<div className={styles.body}>
            <h4>{title}</h4>
            <div className={styles.mainLine}>
                <div className={`${styles.percentLine} ${styles.mainLine}`}></div>
            </div>
            <span>({count})</span>
        </div>);
};
