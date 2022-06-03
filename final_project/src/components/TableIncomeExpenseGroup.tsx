import styles from "./TableIncomeExpenseGroup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { IconName } from "@fortawesome/fontawesome-svg-core";

import Table, { TableRow } from "./Table";
import ButtonWIthIcon from "./ButtonWIthIcon";

function handleClick() {
  alert("clicked");
}

const TableIncomeExpenseGroup = () => {
  const removeButton = (
    <ButtonWIthIcon
      onClick={handleClick}
      listElementId="2"
      fontAwesomeIcon={<FontAwesomeIcon icon={solid("remove")} />}
    />
  );
  const editButton = (
    <ButtonWIthIcon
      onClick={handleClick}
      listElementId="2"
      fontAwesomeIcon={<FontAwesomeIcon icon={solid("edit")} />}
    />
  );
  const detailButton = (
    <ButtonWIthIcon
      onClick={handleClick}
      listElementId="2"
      fontAwesomeIcon={<FontAwesomeIcon icon={solid("list-dots")} />}
    />
  );

  const columnNames: string[] = ["No.", "prva kolona", "druga kolona"];
  //dummy data, wil be fetched from the server
  const tableRows: TableRow[] = [
    {
      components: [
        <p>1</p>,
        <p>ime</p>,
        <div>opis</div>,
        editButton,
        detailButton,
        removeButton,
      ],
    },
    {
      components: [
        <p>2</p>,
        <p>ime</p>,
        <div>opis</div>,
        editButton,
        detailButton,
        removeButton,
      ],
    },
    {
      components: [
        <p>3</p>,
        <p>ime</p>,
        <div>opis</div>,
        editButton,
        detailButton,
        removeButton,
      ],
    },
  ];

  return (
    <div className={styles["income-expense-table"]}>
      <Table columnNames={columnNames} tableRows={tableRows} />
    </div>
  );
};

export default TableIncomeExpenseGroup;
