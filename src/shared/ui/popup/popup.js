import React from "react";
import styles from "./popup.module.scss";
const Popup = ({ children, active, classes, ...rest }) => {
    // const ref = useRef(null);
    // const onClose = () => {
    //   setActive(true)
    // }
    return (<div className={active ? `${styles.main} ${classes}` : styles.disable} {...rest}>
      {children}
    </div>);
};
export default Popup;
