import styles from './user-info.module.scss'
import {AdCard} from "src/modules/ad-card/ui/ad-card.tsx";
import {UserReviews} from "src/modules/user-info/user-reviews/ui/user-reviews.tsx";
import {useTranslation} from "react-i18next";

export const UserInfo = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.descBody}>
                    <h4 className={'title-module'}>{t('profileDescTitle')}</h4>
                    <p>Hi There,
                        Welcome to my minimalist business logo corporate brand style guides book and branding kit gig.
                        Have You Been Looking for a Brand Logo and Complete Corporate Brand Identity or brand book? Great you are at right place:). I will create a flat and minimalist business design with a corporate brand identity that will take your business to the next level…</p>
                </div>
                <div>
                    <h4 className={`${styles.supTitle} title-module`}>{t('adsUserTitle')}</h4>
                    <div className={styles.adWrapper}>
                        <AdCard />
                        <AdCard />
                    </div>
                </div>
                <UserReviews />
            </div>
        </div>
    )
}