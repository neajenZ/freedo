import styles from "src/modules/publications/ui/publication-list/publication-list.module.scss";
import PublicationItem from "src/modules/publications/ui/publication-item/publication-item.tsx";
import {DropdownArrow} from "src/shared/ui/icons/DropdownArrow.tsx";
import {useAppSelector} from "src/shared/hooks/reduxHooks.ts";
import {Publication} from "src/modules/publications/api/publication-api.types.ts";
export const PublicationListCustomers = () => {

    const {userSlice} = useAppSelector(state => state)

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