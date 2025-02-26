import styled from "styled-components";

const MONEY_SLIDER_HEIGHT = 48;

export const StyledGoldSlider = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: ${MONEY_SLIDER_HEIGHT}px 1fr ${MONEY_SLIDER_HEIGHT}px;
  width: 100%;
  align-items: center;
`;

export const TotalGoldWrapper = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 56px 1fr;
  align-items: center;
  width: fit-content;
  margin: 0 auto;

  img {
    width: calc(100% - 24px);
    padding: 0 12px;
  }
`;

export const CoinsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-auto-rows: 16px;
  padding-bottom: 12px;

  img {
    width: 150%;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(15, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (max-width: 300px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const SliderControl = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`;

export const ControlIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-top: 6px;
`;
