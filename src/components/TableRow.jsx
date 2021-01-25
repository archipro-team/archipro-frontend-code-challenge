import React from "react";

function TableRow({ tableData }) {
  if (tableData.length === 0)
    return (
      <tr>
        <td colSpan="3">No Records Found</td>
      </tr>
    );
  return tableData.map(({ _id, name, email, phone }) => (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  ));
}

export default TableRow;
