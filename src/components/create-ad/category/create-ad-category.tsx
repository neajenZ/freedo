import styles from './create-ad-category.module.scss'
import {categories} from "src/components/create-ad/category/categories.ts";
import {useAppDispatch} from "src/shared/hooks/reduxHooks.ts";
import {postSubcategories} from "src/shared/slice/Api/postSubcategories.ts";

export const CreateAdCategory = () => {
    const dispatch = useAppDispatch()



    return (
        <div className={styles.wrapper}>
            {
                categories.map(i => (
                    <div
                        key={i}
                        className={styles.item}
                        onClick={() => dispatch(postSubcategories)}
                    >
                        {i.name}
                    </div>
                ))
            }
        </div>
    )
}