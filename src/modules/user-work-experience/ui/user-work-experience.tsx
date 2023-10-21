import { CommentSlider } from "src/components/comment";
import { fetchComments } from "../model/api/user-work-exp";
import styles from "./user-work-experience.module.scss";

const UserWorkExperience = () => {
  const comments = fetchComments();

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        {/* <GallerySlider /> */}
        {/* <UserServiceFollow /> */}
        <CommentSlider comments={comments} />
        {/* <ServiceUserInfo /> */}
        {/* <ReviewBlock id={id || ""} user={user || ""} /> */}
      </div>
    </div>
  );
};

export default UserWorkExperience;
