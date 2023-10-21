import { useParams } from "react-router-dom";
import { UserCard } from "src/modules/user-card";

const UserProfilePage = () => {
  const { user } = useParams();

  return (
    <div>
      <UserCard user={user || ""} />
    </div>
  );
};

export default UserProfilePage;
