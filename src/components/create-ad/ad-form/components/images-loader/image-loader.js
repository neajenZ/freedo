import styles from "src/components/create-ad/ad-form/ad-form.module.scss";
import { ImgLoader } from "src/components/img-loader/ui/img-loader.tsx";
import { useState } from "react";
import { DeleteBasketIcon } from "src/shared/ui/icons/DeleteBasketIcon.tsx";
export const CreateAdImg = ({ setImages }) => {
    const [image, setImage] = useState();
    const [url, setUrl] = useState([]);
    const loadImg = (e) => {
        if (e.currentTarget.files) {
            setImage(e.currentTarget.files[0]);
            console.log(image);
            try {
                if (url.length > 5) {
                    return alert('Max 5 images');
                }
                for (let i = 0; i < e.currentTarget.files.length; i++) {
                    setUrl([...url, URL.createObjectURL(e.currentTarget.files[i])]);
                    setImages([...url, URL.createObjectURL(e.currentTarget.files[i])]);
                    console.log(url);
                }
            }
            catch (e) {
                setUrl(url);
            }
        }
    };
    const deletePreviewImg = (img) => {
        const newData = [...url].filter((z) => {
            return z !== img;
        });
        setUrl(newData);
        setImages(newData);
    };
    return (<div className={styles.imgLoaderBody}>
            <div className={`${styles.formItem} ${styles.fieldWrapper}`}>
                <h4>Фотографии:</h4>

                <ImgLoader loader={loadImg} text={'В обложке карточки будут видны первые 5 фотографий'}/>

            </div>
            <div className={styles.previewImages}>
                {url.map(i => (<div key={i} className={styles.previewBody}>
                            <img src={i} alt=""/>
                            <button className={styles.deletePreviewImg} onClick={() => deletePreviewImg(i)}>
                                <DeleteBasketIcon />
                            </button>
                        </div>))}
            </div>
        </div>);
};
