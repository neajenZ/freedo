import React, { FC } from "react";
import styles from "./PopUp.module.scss";

interface IPopup {
  children: React.ReactNode;
  active: boolean;
  setActive?: (p: (prev: boolean) => boolean) => void;
  classes: string;
}
const Popup: FC<IPopup> = ({ children, active, classes, ...rest }) => {
  // const ref = useRef(null);
  // const onClose = () => {
  //   setActive(true)
  // }

  return (
    <div
      className={active ? `${styles.main} ${classes}` : styles.disable}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Popup;
