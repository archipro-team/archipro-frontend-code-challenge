import "bootstrap/dist/css/bootstrap.min.css";

import React, { useCallback, useState } from "react";
import { Table } from "reactstrap";

const ContactTable = ({ data }: any) => {
  const Rows = useCallback(
    () =>
      data.map(({ _id, name, email, phone }: any) => (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      )),
    []
  );

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
        <Rows />
      </tbody>
    </Table>
  );
};

export default ContactTable;
