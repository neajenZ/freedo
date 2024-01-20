import {UserCard} from "src/modules/user";
import styles from './ad-page.module.scss'
import {AdInfo} from "src/modules/ad-info/ui/ad-info.tsx";


const AdPage = () => {
    return (
        <div className={'container'}>
            <div className={styles.wrapper}>
                <UserCard />
                <AdInfo />
            </div>
        </div>
    )
}

export default AdPage