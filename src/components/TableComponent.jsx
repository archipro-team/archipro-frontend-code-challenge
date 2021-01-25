import React from "react";
import { Table } from "reactstrap";
import TableRow from "./TableRow";

function TableComponent({ tableData }) {
  return (
    <Table className="App-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <TableRow tableData={tableData} />
      </tbody>
    </Table>
  );
}

export default TableComponent;
