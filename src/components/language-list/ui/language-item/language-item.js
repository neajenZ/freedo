import styles from "./language-item.module.scss";
const LanguageItem = (props) => {
    const { flagImg, detail = false, countryName } = props;
    return (<div className={`${detail && styles.container}`}>
            <div className={styles.country}>
                <img src={`src/shared/assets/images/countries/${flagImg}.svg`} alt={flagImg}/>
            </div>
            {detail && <span className={styles.name}>{countryName}</span>}
        </div>);
};
export default LanguageItem;
