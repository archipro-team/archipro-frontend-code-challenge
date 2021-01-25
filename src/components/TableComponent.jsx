import React, { Component } from "react";
import { Table } from "reactstrap";
import TableRow from "./TableRow";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class TableComponent extends Component {
  raiseSort = (columnName) => {
    const sortColumn = { ...this.props.sortColumn };
    if (columnName === sortColumn.columnName)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.columnName = columnName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (columnName) => {
    const { sortColumn } = this.props;
    if (columnName !== sortColumn.columnName) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <Table className="App-table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("name")}>
              Name {this.renderSortIcon("name")}
            </th>
            <th onClick={() => this.raiseSort("email")}>
              Email {this.renderSortIcon("email")}
            </th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <TableRow tableData={this.props.tableData} />
        </tbody>
      </Table>
    );
  }
}
export default TableComponent;
