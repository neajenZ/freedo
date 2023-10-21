import { useRef, useState } from "react";
import { useOutsideClick } from "src/shared/hooks/use-outside-click";
import { Popup } from "src/shared/ui";
import styles from "./language-list.module.scss";

type LanguageListProps = {
  languages: string[];
};

const LanguageList = (props: LanguageListProps) => {
  const { languages } = props;
  const ref = useRef(null);
  const [activePopup, setActivePopup] = useState(false);
  const onClose = () => {
    setActivePopup((prev) => !prev);
  };
  useOutsideClick(ref, onClose, activePopup);

  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <img className={styles.img} src={languages[0]} alt="item" />
      </div>
      <div className={styles.item}>
        <img className={styles.img} src={languages[1]} alt="item" />
      </div>
      {languages.length > 3 ? (
        <>
          <div
            ref={ref}
            className={styles.item}
            onClick={() => setActivePopup(true)}
          >
            +{languages.length - 2}
          </div>
          <Popup
            classes={styles.popup}
            active={activePopup}
            setActive={setActivePopup}
          >
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <div className={styles.allLang}>All languages</div>
                <div className={styles.x} onClick={() => setActivePopup(false)}>
                  X
                </div>
              </div>
              <div className={styles.langs}>
                {languages.map((item) => (
                  <div key={Math.random()} className={styles.item}>
                    <img className={styles.img} src={item} alt="item" />
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LanguageList;
