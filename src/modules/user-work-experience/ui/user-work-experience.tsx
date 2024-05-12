import styles from "./user-work-experience.module.scss";
import {CommentSlider} from "src/components/comment";

const UserWorkExperience = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
          <CommentSlider />
      </div>
    </div>
  );
};

export default UserWorkExperience;
