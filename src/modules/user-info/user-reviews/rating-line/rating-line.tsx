import styles from './rating-line.module.scss'



// Доделать с полосой процента
interface IRatingLine {
    title: string,
    count: number
}

export const RatingLine = ({title, count}: IRatingLine) => {
    return (
        <div className={styles.body}>
            <h4>{title}</h4>
            <div className={styles.mainLine}>
                <div className={`${styles.percentLine} ${styles.mainLine}`}></div>
            </div>
            <span>({count})</span>
        </div>
    )
}