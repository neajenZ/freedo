import { Grid } from "src/shared/ui";
import { usePublicationsQuery } from "../../api/publication.api";
import PublicationItem from "../publication-item/publication-item";

const PublicationList = () => {
  const { data: publications } = usePublicationsQuery();

  return (
    <Grid container>
      {publications?.map((publication, i) => (
        <Grid item xs={12} sm={6} columnSpacing={10}>
          <PublicationItem
            publication={publication}
            key={`${publication.title}${i}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PublicationList;
