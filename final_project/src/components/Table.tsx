import styles from "./Table.module.css";

import React, { Component, ReactNode } from "react";

interface TableProps {
  columnNames: string[];
  tableRows: TableRow[];
}

export interface TableRow {
  rowIndex?: Number;
  components: JSX.Element[];
}

const Table = ({ tableRows, columnNames }: TableProps) => {
  return (
    <div>
      <table>
        {embedColumnNames(columnNames)}
        {embedRows(tableRows)}
      </table>
    </div>
  );
};

//Helper functions
function embedColumnNames(columnNames: string[]): ReactNode {
  //returns column names appropriate for table
  const thNames: ReactNode[] = [];

  columnNames.map((columnName) => {
    // column names added first
    thNames.push(<th>{columnName}</th>);
  });

  return <tr>{thNames}</tr>;
}

function embedRows(tableRows: TableRow[]): ReactNode[] {
  const rows: ReactNode[] = [];
  tableRows.map((tableRow, index) => {
    return rows.push(embedRow(tableRow.components));
  });
  return rows;
}

function embedRow(components: JSX.Element[]): ReactNode {
  const embeddedComponents: ReactNode[] = [];

  components.map((component) => {
    return embeddedComponents.push(<td>{component}</td>);
  });

  return <tr>{embeddedComponents}</tr>;
}

export default Table;
