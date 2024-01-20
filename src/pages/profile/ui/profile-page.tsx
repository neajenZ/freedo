import { UserCard } from "src/modules/user";
import styles from "./profile-page.module.scss";
import {UserInfo} from "src/modules/user-info/ui/user-info.tsx";

const UserProfilePage = () => {
  return (
      <div className='container'>
          <div className={styles.profile}>
              <UserCard />
              {/*<UserWorkExperience />*/}
              <UserInfo />
          </div>
      </div>

  );
};

export default UserProfilePage;
