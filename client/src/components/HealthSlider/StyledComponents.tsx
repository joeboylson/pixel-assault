import styled from "styled-components";

const HEALTH_SLIDER_HEIGHT = 48;

export const StyledHealthSlider = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: ${HEALTH_SLIDER_HEIGHT}px 1fr ${HEALTH_SLIDER_HEIGHT}px;
  width: 100%;
  align-items: center;
`;

interface ProgressBarProps {
  percentage: number;
}

const progressBarColors = [
  "#ff0000",
  "#ff3300",
  "#ff6600",
  "#ff9900",
  "#ffcc00",
  "#ffff00",
  "#ccff00",
  "#99ff00",
  "#66ff00",
  "#33ff00",
  "#00ff00",
];

export const ProgressBar = styled.div<ProgressBarProps>`
  position: relative;
  text-align: center;
  width: 100%;
  height: ${HEALTH_SLIDER_HEIGHT}px;

  display: grid;
  place-items: center;

  &::before {
    background-color: ${(props) => {
      const colorIndex = Math.round(props.percentage / 10);
      return progressBarColors[colorIndex];
    }};

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${HEALTH_SLIDER_HEIGHT}px;
    width: ${(props) => props.percentage}%;
    border: 2px solid white;
    border-radius: 8px;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 0;
  }

  &.readonly {
    height: ${HEALTH_SLIDER_HEIGHT / 2}px;
    grid-column: span 3;

    &::before {
      height: ${HEALTH_SLIDER_HEIGHT / 2}px;
      opacity: 0.75;
    }
  }
`;

export const ProgressBarValue = styled.div`
  position: relative;
  display: block;
  z-index: 1;
  mix-blend-mode: difference;
  filter: grayscale(1);

  p {
    font-size: 25px;
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
