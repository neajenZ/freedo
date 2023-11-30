import {Card} from "src/shared/ui";
import { Publication } from "../../api/publication-api.types";
import styles from "./publication-item.module.scss";
import FavoritesIcon from "src/shared/ui/icons/FavoritesIcon.tsx";

type PublicationItemProps = {
  publication: Publication;
  lengthDescription: number;
};

const PublicationItem = ({ publication, lengthDescription }: PublicationItemProps) => {
  const { title, price, categories, description } = publication;

  return (
    <Card className={styles.publication}>
      <div className={styles.top}>
          <div className={styles.top__avatar}></div>
              <div className={styles.top__text}>
                  <p>{title}</p>
                  <p className={styles.subtitle}>{categories.map((cat, index) => (index !== categories.length - 1 ?
                      <span key={`${cat}${index}`}>{cat.concat(', ')}</span> :
                      <span key={`${cat}${index}`}>{cat}</span>))}</p>
              </div>
              <div className={styles.top__panel}>
                  <div className={styles.price}><span>{price} $ +</span></div>
                  <button className={styles.favorites}><FavoritesIcon className={styles.heart}/></button>
              </div>
      </div>
        <div className={styles.description}>
            <p>{description.length > lengthDescription ? description.slice(0, lengthDescription).concat(`...`) : description}</p>
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
