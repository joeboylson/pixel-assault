import styled, { css } from "styled-components";

export const carouselTransitionDuration = 1000;
export const carouselAutoTransitionDelay = 7000;

export const StyledCarousel = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

export const stylePreviousDisabled = css`
  &.previous-disabled {
    transform: translateX(0vw);

    &.transition-next {
      transform: translateX(-100vw);
    }

    &.transition-previous {
      transform: translateX(100vw);
    }
  }
`;

export const stylePreviousEnabled = css`
  transform: translateX(-100vw);

  &.transition-next {
    transform: translateX(-200vw);
  }

  &.transition-previous {
    transform: translateX(0);
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;

  ${stylePreviousEnabled}
  ${stylePreviousDisabled}

  &.transition-next,
  &.transition-previous {
    transition-duration: ${carouselTransitionDuration}ms;
    transition-timing-function: cubic-bezier(0.79, 0.14, 0.15, 0.86);
  }
`;

export const ChildWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  flex-shrink: 0;
  background-color: gray;
`;

export const NavigationButtonsWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;

export const NavigationButton = styled.button`
  margin: 12px;
  background-color: var(--themeAccent1);
  border: 0;
  outline: none;
  cursor: pointer;
  transition-duration: 300ms;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 48px;

  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }
`;
