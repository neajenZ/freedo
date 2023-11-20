import { UserCard } from "src/modules/user";
import { UserWorkExperience } from "src/modules/user-work-experience";
import styles from "./profile-page.module.scss";

const UserProfilePage = () => {
  return (
    <div className={styles.profile}>
      <UserCard />
      <UserWorkExperience />
    </div>
  );
};

export default UserProfilePage;
