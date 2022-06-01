import React from "react";
import styles from "./HeaderWithNavigationButton.module.css";

interface HeaderWithNavigationButtonInterface {
  type: "income" | "expenses";
  background_color: string;
}

const HeaderWithNavigationButton = ({
  type,
  background_color,
}: HeaderWithNavigationButtonInterface) => {
  return (
    <div className={styles["header-with-navigation-button-container"]}>
      <h3 className={styles["finance-dashboard-box-header"]}>
        {type.toUpperCase()}
      </h3>
      <button
        className={styles["finance-dashboard-box-button"]}
        placeholder=">"
      >
        more...
      </button>
    </div>
  );
};

export default HeaderWithNavigationButton;
