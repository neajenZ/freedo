import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./comment-slider.module.scss";
import CommentListItem from "../comment-list-item/comment-list-item";
import { TComment } from "../../model/types/comment.types";

type CommentSliderProps = {
  comments: TComment[];
};

const CommentSlider = (props: CommentSliderProps) => {
  const { comments } = props;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.say}>Вот что говорят люди</div>
        <div className={styles.seeAll}>See all reviews</div>
      </div>
      <div>
        <Swiper
          allowTouchMove={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          {comments.map((item: TComment) => (
            <SwiperSlide key={item.id}>
              <CommentListItem
                id={item.id}
                avatar={item.avatar}
                name={item.name}
                date={item.date}
                text={item.text}
                language={item.language}
                stars={item.stars}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev">
            {/* перенести иконку из старого проекта arrowR-botSlider.svg */}
            <p>{">"}</p>
          </div>
          <div className="swiper-button-next">
            {/* перенести иконку из старого проекта arrowL-botSlider.svg */}
            <p>{"<"}</p>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CommentSlider;
