import styles from './send-comment.module.scss'
import {StarRating} from "src/components/send-comment/components/star-rating.tsx";
import { useRef, useState} from "react";
import { useParams} from "react-router-dom";
import {useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {ImgLoader} from "src/components/img-loader/ui/img-loader.tsx";
import api from "src/app/api/api.ts";
import {ICreateComment} from "src/app/types/comments.ts";


export const SendCommentWidjet = () => {
    const [isText, setText] = useState('')
    const [images, setImages] = useState([])
    const {id} = useParams()
    const { userData } = useAppSelector(state => state.userSlice)
    const starRef = useRef<number>(0)
    const handleSubmit = () => {
        if (isText.length < 5) {
            return alert('Минимум 5 символов')
        }
        if (id) {
            const body: ICreateComment = {
                author_id: userData.id,
                card_id: id,
                description: isText,
                rate: starRef.current,
                photoUrls: images
            }
            console.log(body)
            api.comments.create(body)
        }


    }
    console.log('render')
    return (
        <div className={styles.body}>
            <h4 className={'title-module'}>Оценка и отзыв</h4>
            <div className={styles.wrapper}>
                <div className={styles.elem}>
                    <h4>Оценка</h4>
                    <StarRating setRate={(i) => starRef.current = i} />
                </div>
                <div className={styles.elem}>
                    <h4>Комментарий</h4>
                    <div className={styles.inputWrapper}>
                        <textarea
                            className={styles.commentInput}
                            placeholder={'В тексте не должно быть оскорблений'}
                            value={isText}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <h4>От 5 до 590 символов</h4>
                    </div>
                </div>

                <ImgLoader text={'Это необязательно, но с ними отзыв станет более наглядным'} loader={(i) => setImages(i)} />
                <button onClick={handleSubmit} className={styles.sendFormBtn}>Оставить отзыв</button>
            </div>
        </div>
    )
}