import Comment from "../comment-list-item/comment-list-item";
import styles from "./comment-list.module.scss";
const CommentList = (props) => {
    const { comments } = props;
    return (<div className={styles.list}>
      {comments.map((item) => (<Comment key={item.id} avatar={item.avatar} name={item.name} date={item.date} text={item.text} language={item.language} stars={item.stars}/>))}
    </div>);
};
export default CommentList;
