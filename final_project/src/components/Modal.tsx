import React, { Children } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

interface PopUpDialogBoxInterface {
  closePopUp(): void;
  children: React.ReactNode;
}

const Modal = ({ closePopUp, children }: PopUpDialogBoxInterface) => {
  return ReactDOM.createPortal(
    <div className={styles["overlay-container"]}>
      <div onClick={closePopUp} className={styles["backdrop"]} />

      <div
        className={`${styles["modal-content-container"]} income-color-primary`}
      >
        <button className={styles["modal-close-button"]} onClick={closePopUp}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("pop-up-portal") as HTMLElement
  );
};

export default Modal;
