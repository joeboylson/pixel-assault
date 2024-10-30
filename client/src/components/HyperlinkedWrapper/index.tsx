import { Link, To } from "react-router-dom";
import { WithChildren } from "../../types";
import styled from "styled-components";
import SpacedOneColumn from "../SpacedOneColumn";
import { ArrowSquareOut } from "@phosphor-icons/react";

const StyledHyperlinkedWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 12px;

  > div:first-child > a:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    width: fit-content;

    svg {
      margin-left: 8px;
      margin-bottom: 4px;
    }
  }
`;

type _props = WithChildren & {
  to: To;
  linkLabel: string;
};

export default function HyperlinkedWrapper({
  children,
  to,
  linkLabel,
}: _props) {
  return (
    <StyledHyperlinkedWrapper>
      <SpacedOneColumn>
        <Link to={to}>
          {linkLabel} <ArrowSquareOut size={16} />
        </Link>
        <div>{children}</div>
      </SpacedOneColumn>
    </StyledHyperlinkedWrapper>
  );
}
