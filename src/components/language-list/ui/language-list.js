import { useRef, useState } from "react";
import { useOutsideClick } from "src/shared/hooks/use-outside-click";
import { CloseIcon, Popup } from "src/shared/ui";
import styles from "./language-list.module.scss";
import { LanguageItem } from "src/components/language-list";
import { Button } from "src/shared/ui";
// import * as events from "events";
export var LangView;
(function (LangView) {
    LangView["Simple"] = "Simple";
    LangView["Popup"] = "Popup";
    LangView["Detail"] = "Detail"; // flagCountry + nameCountry
})(LangView || (LangView = {}));
const LanguageList = (props) => {
    const { languages, variant } = props;
    const popupRef = useRef(null);
    const [activePopup, setActivePopup] = useState(false);
    const handlePopupClose = function () {
        setActivePopup(false);
    };
    useOutsideClick(popupRef, handlePopupClose, activePopup);
    return (variant === LangView.Simple &&
        <div className={styles.main}>
          {languages.map((item, i) => <LanguageItem key={`${item}-${i}`} flagImg={item}/>)}
      </div> ||
        variant === LangView.Detail &&
            <div className={styles.detail}>
          {languages.map((item, i) => <LanguageItem key={`${item}-${i}`} flagImg={item} countryName={item} detail={true}/>)}
      </div> ||
        variant === LangView.Popup && languages.length > 3 &&
            <div className={styles.main}>
            {languages.slice(0, 2).map((item, i) => (<LanguageItem key={`${item}-${i}`} flagImg={item}/>)).concat(<div ref={popupRef}>
                    <div className={styles.item} onClick={() => setActivePopup(true)}>
                        +{languages.length - 2}
                    </div>
                    <Popup classes={styles.popup} active={activePopup} setActive={setActivePopup}>
                        <div className={styles.head}>
                            <p className={styles.popup__title}>All languages</p>
                            <Button className={styles.popup__closeBtn} onClick={() => handlePopupClose()}><CloseIcon /></Button>
                        </div>
                        <LanguageList variant={LangView.Detail} languages={languages}/>
                    </Popup>
                    </div>)}
      </div>);
};
export default LanguageList;
