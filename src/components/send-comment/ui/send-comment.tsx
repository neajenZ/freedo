import {StarIcon} from 'src/shared/ui/icons/StarIcon';
import styles from './send-comment.module.scss'
import {CameraIcon} from "src/shared/ui/icons/CameraIcon.tsx";
import { useEffect, useState } from 'react';

const stars = [1,2,3,4,5]

export const SendCommentWidjet = () => {
    const [isRating, setRating] = useState<boolean | number>(false)

    const fillItems = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.currentTarget.className = 'activeStar'

        const childrens = e?.currentTarget?.parentElement?.children
        if (childrens) {
            for (let i of childrens) {
                if (i.className === 'activeStar') {
                    return false
                }
                else if (i.className !== 'activeStar') i.className = 'activeStar'
            }
        }
        
        console.log(childrens)
    }

    const removeClasses = (e: React.MouseEvent<HTMLButtonElement>) => {
        const elemParent = e.currentTarget.parentElement?.children

        if (!isRating) {
            if (elemParent) {
                for (let i of elemParent) {
                    i.className = ''
                }
            }
        }
    }

    return (
        <div className={styles.body}>
            <h4 className={'title-module'}>Оценка и отзыв</h4>
            <div className={styles.wrapper}>
                <div className={styles.elem}>
                    <h4>Оценка</h4>
                    <div className={styles.rating}>
                        {
                            stars.map((i) => (
                                <button 
                                    key={i}
                                    onMouseEnter={fillItems}
                                    onClick={(e) => {
                                        setRating(i)
                                        fillItems(e)
                                    }}
                                    onMouseLeave={removeClasses}
                                >
                                    <StarIcon />
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.elem}>
                    <h4>Комментарий</h4>
                    <div className={styles.inputWrapper}>
                        <textarea className={styles.commentInput} placeholder={'В тексте не должно быть оскорблений'} />
                        <h4>От 5 до 590 символов</h4>
                    </div>
                </div>
                <div className={styles.elem}>
                    <h4>Фотографии</h4>
                    <div className={styles.inputWrapper}>
                        <div className={styles.loadImageBody}>
                            <input id={'file_input'} accept={'image/*'} type="file"/>
                            <label htmlFor={'file_input'}>
                            <span className={styles.choiceFileModule}>
                                <CameraIcon />
                            </span>
                            </label>
                        </div>
                        <h4>Это необязательно, но с ними отзыв <br/> станет более наглядным</h4>
                    </div>
                </div>
                <button className={styles.sendFormBtn}>Оставить отзыв</button>
            </div>
        </div>
    )
}