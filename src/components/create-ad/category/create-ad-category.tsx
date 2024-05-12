import styles from './create-ad-category.module.scss'
import {useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import { IRootCategory } from 'src/app/types/categories';
import { useSearchParams } from 'react-router-dom';
import {setPublicationForm} from "src/shared/slice/user-slice.ts";




export const CreateAdCategory = () => {
    // @ts-ignore
    const [URLSearchParams, setURLSearchParams] = useSearchParams()
    const {userSlice, categoriesSlice} = useAppSelector(state => state)

    return (
        <div className={styles.wrapper}>
            {
                categoriesSlice.rootCategories.map((i: IRootCategory) => (
                    <div
                        key={i.id}
                        className={styles.item}
                        onClick={() => {
                            setPublicationForm({
                                ...userSlice.createAdInfo,
                                category: i.name
                            })
                            setURLSearchParams({category: String(i.id)})
                        }}
                    >
                        {i.name}
                    </div>
                ))
            }
        </div>
    )
}