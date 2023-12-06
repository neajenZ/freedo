import styles from "./publication-list.module.scss"
import { usePublicationsQuery } from "../../api/publication.api";
import PublicationItem from "../publication-item/publication-item";

const PublicationList = () => {
  const { data: publications } = usePublicationsQuery();

  return (
      <div className={styles.container}>
      {publications?.map((publication, i) => (
          <PublicationItem
            publication={publication}
            key={`${publication.title}${i}`}
          />
      ))}
      </div>
  );
};

export default PublicationList;
