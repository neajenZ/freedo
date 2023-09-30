import Client from "src/entities/client/ui/client";
import CreateOrder from "src/features/create-order/ui/create-order";
import Card from "src/shared/ui/card/Card";

const ClientWithActions = () => {
  return (
    <Card>
      <Client />
      <CreateOrder />
    </Card>
  );
};

export default ClientWithActions;
