import "bootstrap/dist/css/bootstrap.min.css";

import React, { useCallback, useState } from "react";
import { Table } from "reactstrap";

export type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

export type ContactTableProps = {
  data: Contact[];
};

const ContactTable = ({ data }: ContactTableProps) => {
  const [sortKey, setSortKey] = useState<keyof Contact | undefined>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const onRowClick = useCallback(
    (key: keyof Contact) => () => {
      setSortKey(key);
      setSortOrder(order =>
        order === "desc" || key !== sortKey ? "asc" : "desc"
      );
    },
    [sortKey]
  );

  const Rows = useCallback(() => {
    const sortedData =
      sortKey === undefined
        ? data
        : data.sort((a, b) =>
            sortOrder === "asc"
              ? a[sortKey].localeCompare(b[sortKey])
              : b[sortKey].localeCompare(a[sortKey])
          );

    return (
      <>
        {sortedData.map(({ _id, name, email, phone }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </>
    );
  }, [data, sortKey, sortOrder]);

  return (
    <Table className="App-table">
      <thead>
        <tr>
          <th onClick={onRowClick("name")}>Name</th>
          <th onClick={onRowClick("email")}>Email</th>
          <th onClick={onRowClick("phone")}>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </Table>
  );
};

export default ContactTable;
