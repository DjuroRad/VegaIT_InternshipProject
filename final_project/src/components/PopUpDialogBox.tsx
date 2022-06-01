import React from "react";
import styles from "./PopUpDialogBox.module.css";
import ReactDOM from "react-dom";

interface PopUpDialogBoxInterface {
  closePopUp(): void;
}

const PopUpDialogBox = ({ closePopUp }: PopUpDialogBoxInterface) => {
  return ReactDOM.createPortal(
    <div className={styles["overlay-container"]}>
      <div onClick={closePopUp} className={styles["backdrop"]}></div>
    </div>,
    document.getElementById("pop-up-portal") as HTMLElement
  );
};

export default PopUpDialogBox;
