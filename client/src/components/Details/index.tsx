import { ReactNode } from "react";
import styled from "styled-components";

type DetailsRow = [ReactNode, ReactNode];

interface _props {
  details: DetailsRow[];
}

const StyledDetails = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledDetailsRow = styled("div")`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 24px;
  padding: 8px 0;

  &:last-child {
    border-bottom: 0;
  }
`;

const DetailsLabel = styled("b")`
  text-align: right;
  font-weight: bold !important;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

export default function Details({ details }: _props) {
  return (
    <StyledDetails>
      {details.map(([_1, _2]) => {
        return (
          <StyledDetailsRow>
            <DetailsLabel>{_1}</DetailsLabel>
            <p>{_2}</p>
          </StyledDetailsRow>
        );
      })}
    </StyledDetails>
  );
}
