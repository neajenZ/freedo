import Comment from "../comment-list-item/comment-list-item";
import { TComment } from "../../model/types/comment.types";
import styles from "./comment-list.module.scss";

type CommentListProps = {
  comments: TComment[];
};
const CommentList = (props: CommentListProps) => {
  const { comments } = props;

  return (
    <div className={styles.list}>
      {comments.map((item) => (
        <Comment
          key={item.id}
          id={item.id}
          avatar={item.avatar}
          name={item.name}
          date={item.date}
          text={item.text}
          language={item.language}
          stars={item.stars}
        />
      ))}
    </div>
  );
};

export default CommentList;
