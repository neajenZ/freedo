import { Link } from "react-router-dom";
import styles from "./publication-item.module.scss";
import FavoritesIcon from "src/shared/ui/icons/FavoritesIcon.tsx";
// Доделать слайдер изображений как будет готов бек
const PublicationItem = ({ publication }) => {
    const { title, description, id, date_of_registration, category_id, author_id, views, photoUrls, language_id } = publication;
    if (photoUrls.length === 0) {
        return (<article className={styles.publication}>
          <div className={styles.wrapper}>
              <div style={{
                display: 'none'
            }} className={styles.imageItem}>

              </div>
              <div className={`${styles.descItem} ${styles.cardNotImage}`}>
                  <header className={styles.header}>
                      <div className={styles.header__avatar}></div>
                      <div className={styles.header__text}>
                          <Link to={`/ad/${id}`}>
                            <p>{title}</p>
                          </Link>
                          {/*<p className={styles.subtitle}>{categories.map((cat, index) => (index !== categories.length - 1 ?*/}
                          {/*    <span key={`${cat}${index}`}>{cat.concat(', ')}</span> :*/}
                          {/*    <span key={`${cat}${index}`}>{cat}</span>))}</p>*/}
                      </div>
                      <div className={styles.header__panel}>
                          <div className={styles.price}><span>100 $ +</span></div>
                          <button className={styles.favorites}><FavoritesIcon className={styles.heart}/></button>
                      </div>
                  </header>
                  <div className={styles.description}>
                      <p className={styles.description__text}>{description}</p>
                  </div>
                  <div className={styles.countries}>
                      <div className={styles.countries__item}>1</div>
                      <div className={styles.countries__item}>2</div>
                      <div className={styles.countries__item}>3</div>
                      <div className={styles.countries__item}>4</div>
                      <div className={styles.countries__item}>5</div>
                  </div>
              </div>

          </div>

      </article>);
    }
    return (<div className={styles.publication}>
          <div className={styles.wrapper}>
              <div style={{
            background: `url('${photoUrls[0]}') center no-repeat`,
        }} className={styles.imageItem}>
                <div className={styles.sliderButtons}>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
              </div>
              <div className={styles.descItem}>
                  <header className={styles.header}>
                      <div className={styles.header__avatar}></div>
                      <div className={styles.header__text}>
                          <p>{title}</p>
                          {/*<p className={styles.subtitle}>{categories.map((cat, index) => (index !== categories.length - 1 ?*/}
                          {/*    <span key={`${cat}${index}`}>{cat.concat(', ')}</span> :*/}
                          {/*    <span key={`${cat}${index}`}>{cat}</span>))}</p>*/}
                      </div>
                      <div className={styles.header__panel}>
                          <div className={styles.price}><span>100 $ +</span></div>
                          <button className={styles.favorites}><FavoritesIcon className={styles.heart}/></button>
                      </div>
                  </header>
                  <div className={styles.description}>
                      <p className={styles.description__text}>{description}</p>
                  </div>
                  <div className={styles.countries}>
                      <div className={styles.countries__item}>1</div>
                      <div className={styles.countries__item}>2</div>
                      <div className={styles.countries__item}>3</div>
                      <div className={styles.countries__item}>4</div>
                      <div className={styles.countries__item}>5</div>
                  </div>
              </div>

          </div>

      </div>);
};
export default PublicationItem;
