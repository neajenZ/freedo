import styles from './user-reviews.module.scss'
import {RatingLine} from "src/modules/user-info/user-reviews/rating-line/rating-line.tsx";
import CommentListItem from "src/components/comment/ui/comment-list-item/comment-list-item.tsx";
import {SendCommentWidjet} from "src/components/send-comment/ui/send-comment.tsx";
import {useState} from "react";

export const UserReviews = () => {

    const [reviewWidjet, setReviewWidjet] = useState(false)

    return (
        <div className={styles.body}>
            <h4 className={`${styles.titleSection} title-module`}>Отзывы о пользователе</h4>
            <div className={styles.headWrapper}>
                <div className={styles.generalRating}>
                    <div className={styles.generalRatingWrapper}>
                        <h3>5.0</h3>
                        <div className={'stars'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.80148 14.5291C9.6231 14.3942 9.3769 14.3942 9.19853 14.5291L4.5427 18.0479C4.15323 18.3422 3.61603 17.9612 3.76511 17.4963L5.62531 11.6956C5.69015 11.4934 5.6202 11.2722 5.45086 11.1441L0.687946 7.54074C0.305593 7.25147 0.510167 6.642 0.989615 6.642H6.76308C6.9822 6.642 7.1758 6.49932 7.24067 6.29001L9.02241 0.540999C9.16786 0.0716861 9.83214 0.0716864 9.97759 0.540999L11.7593 6.29001C11.8242 6.49932 12.0178 6.642 12.2369 6.642H18.0104C18.4898 6.642 18.6944 7.25147 18.3121 7.54074L13.5491 11.1441C13.3798 11.2722 13.3099 11.4934 13.3747 11.6956L15.2349 17.4963C15.384 17.9612 14.8468 18.3422 14.4573 18.0479L9.80148 14.5291Z" fill="#FFD338"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M9.80148 14.5291C9.6231 14.3942 9.3769 14.3942 9.19853 14.5291L4.5427 18.0479C4.15323 18.3422 3.61603 17.9612 3.76511 17.4963L5.62531 11.6956C5.69015 11.4934 5.6202 11.2722 5.45086 11.1441L0.687946 7.54074C0.305593 7.25147 0.510167 6.642 0.989615 6.642H6.76308C6.9822 6.642 7.1758 6.49932 7.24067 6.29001L9.02241 0.540999C9.16786 0.0716861 9.83214 0.0716864 9.97759 0.540999L11.7593 6.29001C11.8242 6.49932 12.0178 6.642 12.2369 6.642H18.0104C18.4898 6.642 18.6944 7.25147 18.3121 7.54074L13.5491 11.1441C13.3798 11.2722 13.3099 11.4934 13.3747 11.6956L15.2349 17.4963C15.384 17.9612 14.8468 18.3422 14.4573 18.0479L9.80148 14.5291Z" fill="#FFD338"/>
                            </svg>
                        </div>
                    </div>
                    <p>Основано на мнении 82 людей</p>

                    <div className={styles.ratingLineWrapper}>
                        <RatingLine title={'5 звёзд'} count={88} />
                        <RatingLine title={'4 звезды'} count={212} />
                        <RatingLine title={'3 звезды'} count={66} />
                        <RatingLine title={'2 звезды'} count={55} />
                        <RatingLine title={'1 звезда'} count={21} />
                    </div>
                </div>
                <div className={styles.sendReviewBody}>
                    <p>Рейтинг — это среднее арифметическое оценок ипользователей.</p>
                    <button onClick={() => setReviewWidjet(!reviewWidjet)}>Оставить отзыв</button>
                </div>
            </div>
            {
                reviewWidjet && <SendCommentWidjet />
            }
            <section className={styles.reviewsWrapper}>
                <CommentListItem id={2} avatar={''} name={'Alexey'} date={'Вчера'} text={'Текст коммента'} language={''} stars={3} />
                <CommentListItem id={2} avatar={''} name={'Alexey'} date={'Вчера'} text={'Текст коммента'} language={''} stars={3} />
                <CommentListItem id={2} avatar={''} name={'Alexey'} date={'Вчера'} text={'Текст коммента'} language={''} stars={3} />

            </section>
        </div>
    )
}