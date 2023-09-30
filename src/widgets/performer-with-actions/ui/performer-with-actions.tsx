import Performer from "src/entities/performer/ui/performer";
import { CreateService } from "src/features/create-service";
import { Card } from "src/shared/ui";

const PerformerWithActions = () => {
  return (
    <Card>
      <Performer />
      <CreateService />
    </Card>
  );
};

export default PerformerWithActions;
