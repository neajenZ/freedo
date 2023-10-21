import { useParams } from "react-router-dom";
import { UserCard } from "src/modules/user-card";
import { UserWorkExperience } from "src/modules/user-work-experience";
import styles from "./profile-page.module.scss";

const UserProfilePage = () => {
  const { user } = useParams();

  return (
    <div className={styles.profile}>
      <UserCard user={user || ""} />
      <UserWorkExperience />
    </div>
  );
};

export default UserProfilePage;
