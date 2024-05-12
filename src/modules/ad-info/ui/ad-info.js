import styles from './ad-info.module.scss';
import { AdPictures } from "src/components/ad-pictures/ui/ad-pictures.tsx";
import Price from "src/shared/ui/price/price.tsx";
import FavoritesIcon from "src/shared/ui/icons/FavoritesIcon.tsx";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/shared/hooks/reduxHooks.ts";
import { CommentSlider } from "src/components/comment";
export const AdInfo = () => {
    const { t } = useTranslation();
    const { publication, comments } = useAppSelector(state => state.publicationsSlice);
    return (<div className={styles.body}>
            <div className={styles.wrapper}>
                <AdPictures />
                <div className={styles.aboutAdWrapper}>
                    <div className={styles.aboutAd}>
                        <h3 className={'title-module'}>{publication.title}</h3>
                        <h4>Услуги, IT, интернет, телеком, создание сайтов</h4>
                    </div>
                    <div className={styles.priceCont}>
                        <Price price={1200}/>
                        <FavoritesIcon />
                    </div>
                </div>
                {comments.length > 0 ? <CommentSlider comments={comments}/> : null}

                <div className={styles.aboutUser}>
                    <h4>{t('aboutThisUser')}</h4>
                    <p>
                        {publication.description}
                    </p>
                </div>
            </div>
        </div>);
};
