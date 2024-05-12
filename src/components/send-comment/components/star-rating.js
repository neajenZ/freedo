import styles from "src/components/send-comment/ui/send-comment.module.scss";
import { StarIcon } from "src/shared/ui/icons/StarIcon.tsx";
import { useEffect, useRef, useState } from "react";
const stars = [1, 2, 3, 4, 5];
export const StarRating = ({ setRate }) => {
    const [isRating, setRating] = useState(false);
    const starsRef = useRef(null);
    useEffect(() => {
        const abc = () => {
            const target = starsRef.current?.children;
            if (isRating) {
                if (typeof isRating === 'number') {
                    if (target) {
                        for (let i = 0; i < target.length; i++) {
                            target[i].className = '';
                        }
                        for (let i = 0; i < isRating; i++) {
                            target[i].className = 'activeStar';
                        }
                        setRate(isRating);
                    }
                }
            }
        };
        abc();
    }, [isRating]);
    return (<div ref={starsRef} className={styles.rating}>
            {stars.map((i) => (<button key={i} onClick={() => setRating(i)}>
                        <StarIcon />
                    </button>))}
        </div>);
};
