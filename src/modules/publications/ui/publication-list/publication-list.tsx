import styles from "./publication-list.module.scss"
import {IcoArrow} from "src/modules/publications/ui/ico-arrow.tsx";
import {useTranslation} from "react-i18next";

const PublicationList = () => {
    const {t} = useTranslation()

  return (
      <div className={'container'}>
          <div className={styles.filterWrapper}>
              <button>
                  <span>
                      {t('customerNavigate.languageBtn')}
                      <IcoArrow />
                  </span>
              </button>
              <button>{t('customerNavigate.salesBtn')}</button>
              <button>{t('customerNavigate.searchBtn')}</button>
              <button>{t('customerNavigate.devBtn')}</button>
              <button>{t('customerNavigate.allBtn')}</button>
          </div>
          <div className={styles.container}>
              {/*{publications?.map((publication, i) => (*/}
              {/*    <PublicationItem*/}
              {/*        image={CardImg}*/}
              {/*        publication={publication}*/}
              {/*        key={`${publication.title}${i}`}*/}
              {/*    />*/}
              {/*))}*/}
          </div>
      </div>

  );
};

export default PublicationList;
