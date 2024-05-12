import styles from "src/modules/publications/ui/publication-list/publication-list.module.scss";
import PublicationItem from "src/modules/publications/ui/publication-item/publication-item.tsx";
import {DropdownArrow} from "src/shared/ui/icons/DropdownArrow.tsx";
import {useAppDispatch, useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {Publication} from "src/modules/publications/api/publication-api.types.ts";
import {useEffect, useState} from "react";
import api from "src/app/api/api.ts";
import {setPublications} from "src/shared/slice/user-slice.ts";
export const PublicationListCustomers = () => {
    const {userSlice} = useAppSelector(state => state)
    const [isFetching, setFetching] = useState(true)
    const [page, setPage] = useState(0)
    const [isBlock, setBlock] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isFetching && !isBlock) {
            api.publications.get({offset: page, limit: 15})
                .then((res) => {
                    if (res.data.length === 0) {
                        return setBlock(true)
                    } else {
                        setPage(page + 1)
                        dispatch(setPublications(res.data))
                    }

                })
                .catch((e) => {
                    console.log(e)
                })
                .finally(() => setFetching(false))
        }

    }, [isFetching]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className={'container'}>
            <div className={styles.navWrapper}>
                <div className={styles.dropdownBtn}>Новинки <DropdownArrow /></div>
                <div className={styles.dropdownBtn}>Выберите язык <DropdownArrow /></div>
            </div>
            <div className={styles.container}>
                {userSlice.publications?.map((publication: Publication) => (
                    <PublicationItem
                        publication={publication}
                        key={publication.id}
                    />
                ))}
            </div>
        </div>
    )
}