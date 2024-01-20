import styles from "src/modules/publications/ui/publication-list/publication-list.module.scss";
import {IcoArrow} from "src/modules/publications/ui/ico-arrow.tsx";
import PublicationItem from "src/modules/publications/ui/publication-item/publication-item.tsx";
import {usePublicationsQuery} from "src/modules/publications/api/publication.api.ts";
import {DropdownArrow} from "src/shared/ui/icons/DropdownArrow.tsx";
export const PublicationListCustomers = () => {

    const { data: publications } = usePublicationsQuery();

    return (
        <div className={'container'}>
            <div className={styles.navWrapper}>
                <div className={styles.dropdownBtn}>Новинки <DropdownArrow /></div>
                <div className={styles.dropdownBtn}>Выберите язык <DropdownArrow /></div>
            </div>
            <div className={styles.container}>
                {publications?.map((publication, i) => (
                    <PublicationItem
                        publication={publication}
                        key={`${publication.title}${i}`}
                    />
                ))}
            </div>
        </div>
    )
}