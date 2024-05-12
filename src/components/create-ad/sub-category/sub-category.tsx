import styles from './sub-category.module.scss'
import {useEffect, useState} from "react";
import api from "src/app/api/api.ts";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {useSearchParams} from "react-router-dom";
import { setPublicationForm } from 'src/shared/slice/user-slice';


export const CreateAdSubCategory = () => {
    const dispatch = useAppDispatch()
    const {userSlice} = useAppSelector(state => state)
    const [URLSearchParams, setURLSearchParams] = useSearchParams()
    const [subCategories, setSubCategories] = useState<any[]>()

    const requestSubcategory = (name?: string) => {
        api.categories.getChildrens(name)
            .then((res) => {
                setSubCategories(res.data.subcategories)
            })
            .catch((e) => {
                console.error('subcategories error: ', e)
            })
    }
    useEffect(() => {
        requestSubcategory(URLSearchParams.get('category') || undefined)
    }, []);
    console.log(window.location.search)

    return (
        <div className={styles.wrapper}>
            {
                subCategories?.map((i) => (
                    <span
                        key={i.id}
                        onClick={() => {
                            dispatch(setPublicationForm({
                                ...userSlice.createAdInfo,
                                subcategory: 54
                            }))
                            setURLSearchParams(params => {
                                params.set('sub_category', `${i.id}`);
                                return params
                            })
                        }}
                    >{i.name}</span>
                ))
            }

        </div>
    )
}