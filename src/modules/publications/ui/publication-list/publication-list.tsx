import styles from "./publication-list.module.scss"
import {IcoArrow} from "src/modules/publications/ui/ico-arrow.tsx";

const PublicationList = () => {
  return (
      <div className={'container'}>
          <div className={styles.filterWrapper}>
              <button>
                  <span>
                      Language
                      <IcoArrow />
                  </span>
              </button>
              <button>Sales & Marketing</button>
              <button>Search</button>
              <button>Development & IT</button>
              <button>AI Services</button>
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
