import styles from './create-ad-category.module.scss'
import {categories} from "src/components/create-ad/category/categories.ts";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {postSubcategories} from "src/shared/slice/Api/postSubcategories.ts";
import {useEffect} from "react";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";

export const CreateAdCategory = () => {
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                userSlice.categories.map(i => (
                    <div
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