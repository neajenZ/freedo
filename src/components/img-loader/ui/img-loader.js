import styles from "./img-loader.module.scss";
import { CameraIcon } from "src/shared/ui/icons/CameraIcon.tsx";
import { useRef, useState } from "react";
export const ImgLoader = ({ text, loader }) => {
    const inputRef = useRef(null);
    const [images, setImages] = useState([]);
    const handler = () => {
        const target = inputRef.current?.files;
        if (images.length >= 5) {
            return alert('Максимальное кол-во изображений: 5');
        }
        if (target) {
            const url = URL.createObjectURL(target[0]);
            const newData = [url, ...images];
            setImages(newData);
            loader(newData);
        }
    };
    return (<div className={styles.body}>
            <div className={styles.loadImageBody}>
                <input ref={inputRef} onChange={handler} id={'file_input'} accept={'image/*'} type="file"/>
                <label htmlFor={'file_input'}>
                            <span className={styles.choiceFileModule}>
                                <CameraIcon />
                            </span>
                </label>
            </div>
            <div className={styles.imagesWrapper}>
                {images?.map((i) => (<div className={styles.imgWrapper} onClick={() => setImages([...images.filter((k) => k !== i)])}>
                            <img src={`${i}`} width={'150px'} height={'80px'} alt=""/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 21 22" fill="none">
                                <path d="M12.2494 9.8394V15.0894M8.74908 9.8394L8.74908 15.0894M14.074 5.49256L13.5954 4.05652C13.3559 3.3381 12.6836 2.85352 11.9263 2.85352H9.18435C8.42707 2.85352 7.75475 3.3381 7.51527 4.05652L7.03659 5.49256M4.44205 7.89764C4.98415 8.62043 5.27719 9.49956 5.27719 10.4031V16.0486C5.27719 17.9919 6.85258 19.5673 8.79591 19.5673H12.3146C14.258 19.5673 15.8333 17.9919 15.8333 16.0486V10.4031C15.8333 9.49956 16.1264 8.62043 16.6685 7.89764C17.4117 6.90664 16.7046 5.49244 15.4659 5.49244H5.64465C4.40591 5.49244 3.6988 6.90664 4.44205 7.89764Z" stroke="#4E5662" stroke-width="1.31952" stroke-linecap="round"/>
                            </svg>
                        </div>))}
            </div>
            <h4>{text}</h4>
        </div>);
};
