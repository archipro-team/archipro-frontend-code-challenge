import "bootstrap/dist/css/bootstrap.min.css";

import React, { useCallback, useState } from "react";
import { Table } from "reactstrap";
import TableHeader from "./Table/Header";
import { pickAll } from "ramda";
import MatchHighlight from "./Table/MatchHighlight";

export type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

export type ContactTableProps = {
  searchQuery?: string;
  data: Contact[];
};

const ContactTable = ({ searchQuery = "", data }: ContactTableProps) => {
  const [sortKey, setSortKey] = useState<keyof Contact | undefined>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const parsedSearchQuery = searchQuery.trim().toLowerCase();

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
    const dataFilter = (data: Contact) => {
      const filterProps: Pick<Contact, "name" | "email" | "phone"> = pickAll(
        ["name", "email", "phone"],
        data
      );

      return Object.values(filterProps).some(value =>
        value
          .trim()
          .toLowerCase()
          .includes(parsedSearchQuery)
      );
    };

    const sortedData =
      sortKey === undefined
        ? data
        : data.sort((a, b) =>
            sortOrder === "asc"
              ? a[sortKey].localeCompare(b[sortKey])
              : b[sortKey].localeCompare(a[sortKey])
          );

    const sortedAndFilteredData =
      parsedSearchQuery === "" ? sortedData : sortedData.filter(dataFilter);

    const QueryMatchHighLight = ({ children }: { children: string }) => (
      <MatchHighlight highlight={parsedSearchQuery}>{children}</MatchHighlight>
    );

    return (
      <>
        {sortedAndFilteredData.map(({ _id, name, email, phone }) => (
          <tr key={_id}>
            <td>
              <QueryMatchHighLight>{name}</QueryMatchHighLight>
            </td>
            <td>
              <QueryMatchHighLight>{email}</QueryMatchHighLight>
            </td>
            <td>
              <QueryMatchHighLight>{phone}</QueryMatchHighLight>
            </td>
          </tr>
        ))}
      </>
    );
  }, [data, parsedSearchQuery, sortKey, sortOrder]);

  return (
    <Table className="App-table">
      <thead>
        <tr>
          <TableHeader
            sortOrder={sortKey === "name" ? sortOrder : undefined}
            onClick={onRowClick("name")}
          >
            Name
          </TableHeader>
          <TableHeader
            sortOrder={sortKey === "email" ? sortOrder : undefined}
            onClick={onRowClick("email")}
          >
            Email
          </TableHeader>
          <TableHeader
            sortOrder={sortKey === "phone" ? sortOrder : undefined}
            onClick={onRowClick("phone")}
          >
            Contact Number
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </Table>
  );
};

export default ContactTable;
