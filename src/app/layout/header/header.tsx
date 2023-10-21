import { Link } from "react-router-dom";
import { RoutePath } from "src/shared/const";

const Header = () => {
  return (
    <nav>
      <Link to={RoutePath.main}>Main page</Link>
      <Link to={RoutePath.profile}>Profile page</Link>
    </nav>
  );
};

export default Header;
