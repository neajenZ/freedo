import {Card} from "src/shared/ui";
import { Publication } from "../../api/publication-api.types";
import styles from "./publication-item.module.scss";
import FavoritesIcon from "src/shared/ui/icons/FavoritesIcon.tsx";

type PublicationItemProps = {
  publication: Publication;
};

const PublicationItem = ({ publication }: PublicationItemProps) => {
  const { title, price, categories, description } = publication;

  return (
    <Card className={styles.publication}>
      <header className={styles.header}>
          <div className={styles.header__avatar}></div>
              <div className={styles.header__text}>
                  <p>{title}</p>
                  <p className={styles.subtitle}>{categories.map((cat, index) => (index !== categories.length - 1 ?
                      <span key={`${cat}${index}`}>{cat.concat(', ')}</span> :
                      <span key={`${cat}${index}`}>{cat}</span>))}</p>
              </div>
              <div className={styles.header__panel}>
                  <div className={styles.price}><span>{price} $ +</span></div>
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
    </Card>
  );
};

export default PublicationItem;
