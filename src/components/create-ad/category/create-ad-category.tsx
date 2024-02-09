import styles from './create-ad-category.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {postSubcategories} from "src/shared/slice/Api/postSubcategories.ts";
import {useEffect} from "react";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";
import Cookies from "js-cookie";

export const CreateAdCategory = () => {
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
    const token = Cookies.get('accessToken')
    useEffect(() => {
        token && dispatch(getCategories(token))
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