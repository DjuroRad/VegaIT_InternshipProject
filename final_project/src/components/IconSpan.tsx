import React from "react";
import styles from "./IconSpan.module.css";
interface Props {
  iconClass: string;
}
const IconSpan = ({ iconClass }: Props) => {
  return (
    <span className={styles["icon-span"]}>
      <i className={iconClass}></i>
    </span>
  );
};

export default IconSpan;
