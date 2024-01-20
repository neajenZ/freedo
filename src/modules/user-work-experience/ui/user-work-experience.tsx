import styles from "./user-work-experience.module.scss";
import {CommentSlider} from "src/components/comment";
import {fetchComments} from "src/modules/user-work-experience/model/api/user-work-exp.ts";

const UserWorkExperience = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
          <CommentSlider comments={fetchComments()} />
      </div>
    </div>
  );
};

export default UserWorkExperience;
