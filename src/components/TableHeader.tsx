import React from "react";
import styled from "styled-components";

export type TableHeaderProps = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
  HTMLTableHeaderCellElement
> & {
  sortOrder?: "asc" | "desc";
};

export const StyledTableHeader = styled.th<any>`
  user-select: none;
  cursor: pointer;
`;

const TableHeader = ({ sortOrder, children, ...rest }: TableHeaderProps) => {
  const sortIcon =
    sortOrder === undefined
      ? undefined
      : sortOrder === "asc"
      ? "\u25B2"
      : "\u25BC";

  return (
    <StyledTableHeader {...rest}>
      {children} {sortIcon}
    </StyledTableHeader>
  );
};

export default TableHeader;
