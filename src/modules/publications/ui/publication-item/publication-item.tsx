import { Card } from "src/shared/ui";
import { Publication } from "../../api/publication-api.types";
import styles from "./publication-item.module.scss";

type PublicationItemProps = {
  publication: Publication;
};

const PublicationItem = (props: PublicationItemProps) => {
  const { publication } = props;
  return (
    <Card className={styles.publication}>
      <div>
        <p className="title">{publication.title}</p>
        <p className="subtitle">{publication.categories}</p>
      </div>
      <div>{publication.description}</div>
    </Card>
  );
};

export default PublicationItem;
