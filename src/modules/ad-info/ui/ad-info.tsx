import styles from './ad-info.module.scss'
import {AdPictures} from "src/components/ad-pictures/ui/ad-pictures.tsx";
import Price from "src/shared/ui/price/price.tsx";
import FavoritesIcon from "src/shared/ui/icons/FavoritesIcon.tsx";
import UserWorkExperience from "../../user-work-experience/ui/user-work-experience.tsx";
import {UserReviews} from "src/modules/user-info/user-reviews/ui/user-reviews.tsx";
import {useTranslation} from "react-i18next";

export const AdInfo = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <AdPictures />
                <div className={styles.aboutAdWrapper}>
                    <div className={styles.aboutAd}>
                        <h3 className={'title-module'}>Веб-дизайнер, UX/UI дизайнер</h3>
                        <h4>Услуги, IT, интернет, телеком, создание сайтов</h4>
                    </div>
                    <div className={styles.priceCont}>
                        <Price price={1200} />
                        <FavoritesIcon />
                    </div>
                </div>
                <UserWorkExperience />
                <div className={styles.aboutUser}>
                    <h4>{t('aboutThisUser')}</h4>
                    <p>
                        Hi There,
                        Welcome to my minimalist business logo corporate brand style guides book and branding kit gig.
                        Have You Been Looking for a Brand Logo and Complete Corporate Brand Identity or brand book? Great you are at right place:)
                        I will create a flat and minimalist business design with a corporate brand identity that will take your business to the next level…
                    </p>
                </div>
                <UserReviews />
            </div>
        </div>
    )
}