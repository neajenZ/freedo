import Header from "src/app/layout/header/header";
import { ClientWithActions } from "src/widgets/client-with-actions";
import { PerformerWithActions } from "src/widgets/performer-with-actions";

const MainPage = () => {
  return (
    <div>
      <Header />
      <h1>Marketplace</h1>
      <ClientWithActions />
      <PerformerWithActions />
    </div>
  );
};

export default MainPage;
