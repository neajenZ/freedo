import styles from './sub-category.module.scss'
import {useSearchParams} from "react-router-dom";

export const CreateAdSubCategory = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div className={styles.wrapper}>
            <span onClick={(e) => setSearchParams({subcategory: e.currentTarget.innerText})}>Текст</span>

        </div>
    )
}