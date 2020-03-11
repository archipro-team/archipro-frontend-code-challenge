import React, { useCallback, ChangeEventHandler } from "react";

export type SearchBoxProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onValueChange?(value: string): any;
};

const SearchBox = ({ onValueChange, ...rest }: SearchBoxProps) => {
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => {
      rest.onChange?.(e);
      onValueChange?.(e.target.value);
    },
    [onValueChange, rest.onChange]
  );

  return <input onChange={onChange} {...rest} />;
};

export default SearchBox;
