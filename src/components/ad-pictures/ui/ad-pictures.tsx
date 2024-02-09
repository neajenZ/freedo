import styles from './ad-pictures.module.scss'
import imgXL from '../main.png'
import imgXS from '../xs.png'
import {Swiper, SwiperSlide} from "swiper/react";
export const AdPictures = () => {



    if (window.innerWidth <= 480) {
        return (
            <Swiper
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
dsadadadsad
                <SwiperSlide>
                    <img className={styles.swiperImg} src={imgXS} alt=""/>
                </SwiperSlide>
            </Swiper>
        )
    }

    return (
        <div className={styles.body}>
            <div className={styles.mainImg}>
                <img src={imgXL} alt=""/>
            </div>
            <div className={styles.imgList}>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
                <div className={styles.wrapperImgXs}>
                    <img src={imgXS} alt=""/>
                </div>
            </div>
        </div>
    )
}