import styles from './create-ad-category.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {useEffect} from "react";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";
import Cookies from "js-cookie";
import { ICategory } from 'src/app/types/categories';

export const CreateAdCategory = () => {
    // @ts-ignore
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
    const token = Cookies.get('accessToken')
    useEffect(() => {
        token && dispatch(getCategories(token))
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                userSlice.categories.map((i: ICategory) => (
                    <div
                        className={styles.item}
                        onClick={() => {
                        }}
                    >
                        {i.name}
                    </div>
                ))
            }
        </div>
    )
}