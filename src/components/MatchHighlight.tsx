import React from "react";
import styled from "styled-components";

export type MatchHighlightProps = {
  children: string;
  highlight?: string;
};

export const StyledHighlight = styled.span`
  background-color: yellow;
`;

const MatchHighlight = ({ children, highlight }: MatchHighlightProps) => {
  if (highlight === undefined) {
    return <>{children}</>;
  }

  const match = children.toLowerCase().match(highlight.toLowerCase());

  // First match for now, will take longer for multi match
  if (match !== null) {
    const startString = children.slice(0, match.index!);
    const endString = children.slice(match.index! + match[0].length);
    const highLight = children.slice(
      match.index!,
      match.index! + match[0].length
    );

    return (
      <>
        {startString}
        <StyledHighlight>{highLight}</StyledHighlight>
        {endString}
      </>
    );
  }

  return <>{children}</>;
};

export default MatchHighlight;
