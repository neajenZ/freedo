import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./comment-slider.module.scss";
import CommentListItem from "../comment-list-item/comment-list-item";
import 'swiper/css';
import { ArrowRightIcon } from "src/shared/ui/icons/ArrowRightIcon.tsx";
import { useTranslation } from "react-i18next";
const CommentSlider = (props) => {
    const { comments } = props;
    const { t } = useTranslation();
    return (<div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.say}>{t('reviewsSectionTitle')}</div>
        <div className={styles.seeAll}>{t('allReviewsText')}</div>
      </div>
      <div className={styles.swiperCont}>
        <Swiper slidesPerView={1} navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }} modules={[Navigation]} className={styles.mySwiper}>
          {comments.map((item) => (<SwiperSlide key={item.id}>
              <CommentListItem commentData={item}/>
            </SwiperSlide>))}

        </Swiper>
          {comments.length > 1 ? (<>
                      <button className="swiper-button-next">
                          <ArrowRightIcon />
                      </button>
                      <div className="swiper-button-prev">
                          {/* перенести иконку из старого проекта arrowL-botSlider.svg */}
                          <p>{"<"}</p>
                      </div>
                  </>) : null}

      </div>
    </div>);
};
export default CommentSlider;
