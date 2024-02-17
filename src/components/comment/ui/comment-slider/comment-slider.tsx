import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./comment-slider.module.scss";
import CommentListItem from "../comment-list-item/comment-list-item";
import { TComment } from "../../model/types/comment.types";
import 'swiper/css'
import {ArrowRightIcon} from "src/shared/ui/icons/ArrowRightIcon.tsx";
import {useTranslation} from "react-i18next";

type CommentSliderProps = {
  comments: TComment[];
};

const CommentSlider = (props: CommentSliderProps) => {
  const { comments } = props;
    const {t} = useTranslation()
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.say}>{t('reviewsSectionTitle')}</div>
        <div className={styles.seeAll}>{t('allReviewsText')}</div>
      </div>
      <div className={styles.swiperCont}>
        <Swiper
            slidesPerView={1}
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

        </Swiper>
          <button className="swiper-button-next">
              <ArrowRightIcon />
          </button>
          <div className="swiper-button-prev">
              {/* перенести иконку из старого проекта arrowL-botSlider.svg */}
              <p>{"<"}</p>
          </div>
      </div>
    </div>
  );
};

export default CommentSlider;
