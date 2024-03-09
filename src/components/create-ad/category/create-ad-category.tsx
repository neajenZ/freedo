import styles from './create-ad-category.module.scss'
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {useEffect} from "react";
import {getCategories} from "src/shared/slice/Api/getCategories.ts";
import Cookies from "js-cookie";
import { IRootCategory } from 'src/app/types/categories';
import { useSearchParams } from 'react-router-dom';




export const CreateAdCategory = () => {
    // @ts-ignore
    const dispatch = useAppDispatch()
    const [URLSearchParams, setURLSearchParams] = useSearchParams()
    const {userSlice} = useAppSelector(state => state)
    const token = Cookies.get('accessToken')
    useEffect(() => {
        token && dispatch(getCategories(token))
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                userSlice.categories.map((i: IRootCategory) => (
                    <div
                        key={i.id}
                        className={styles.item}
                        onClick={() => {
                            setURLSearchParams({category: i.name})
                        }}
                    >
                        {i.name}
                    </div>
                ))
            }
        </div>
    )
}