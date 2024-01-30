import styles from "./img-loader.module.scss";
import {CameraIcon} from "src/shared/ui/icons/CameraIcon.tsx";

interface IImgLoader {
    text: React.ReactNode | string,
    loader: () => void
}

export const ImgLoader = ({text, loader}: IImgLoader) => {
    return (
        <div className={styles.body}>
            <div className={styles.loadImageBody}>
                <input onChange={loader} id={'file_input'} accept={'image/*'} type="file"/>
                <label htmlFor={'file_input'}>
                            <span className={styles.choiceFileModule}>
                                <CameraIcon />
                            </span>
                </label>
            </div>
            <h4>{text}</h4>
        </div>


    )
}