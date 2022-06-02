import styles from "./HeaderWithNavigationButton.module.css";
import { useNavigate } from "react-router-dom";
interface HeaderWithNavigationButtonInterface {
  type: "income" | "expense";
  background_color: string;
}

const HeaderWithNavigationButton = ({
  type,
  background_color,
}: HeaderWithNavigationButtonInterface) => {
  const navigate = useNavigate();
  return (
    <div className={styles["header-with-navigation-button-container"]}>
      <h3 className={styles["finance-dashboard-box-header"]}>
        {type.toUpperCase()}
      </h3>
      <button
        onClick={() => navigate("/table/" + type)}
        className={styles["finance-dashboard-box-button"]}
        placeholder=">"
      >
        more...
      </button>
    </div>
  );
};

export default HeaderWithNavigationButton;
