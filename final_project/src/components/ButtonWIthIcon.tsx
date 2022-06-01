import styles from "./ButtonWithIcon.module.css";

interface ButtonWIthIconProps {
  onClick(id: string): void;
  listElementId: string;
  fontAwesomeIcon: JSX.Element;
}

const ButtonWIthIcon = ({
  onClick,
  listElementId,
  fontAwesomeIcon,
}: ButtonWIthIconProps) => {
  function onClickHandler() {
    onClick(listElementId);
  }

  return (
    <button
      className={styles["list-element-delete-button"]}
      onClick={onClickHandler}
    >
      {fontAwesomeIcon}
      {/* <i className={"fa fa-trash"}></i> */}
      {/* <i className="fa-trash" /> */}
    </button>
  );
};

export default ButtonWIthIcon;
