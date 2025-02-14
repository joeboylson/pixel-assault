import styled from "styled-components";
import MountainTribesHQ from "../../assets/images/Mountain Tribes - HQ.png";

export const StyledHealthTracker = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  padding: 0 24px;
`;

export const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 1fr;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  gap: 8px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const HealthSlidersWrapper = styled.div<{ backgroundsrc: string }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 48px 0;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: -webkit-fill-available;
    z-index: -1;

    background-image: url("${(props) => props.backgroundsrc}");
    background-size: cover;
    background-position: center;

    opacity: 0.3;
    border-radius: 8px;
  }
`;

export const FactionBanner = styled.div<{ iconsrc: string; bannersrc: string }>`
  width: 100%;
  height: 70px;
  background-image: url("${(props) => props.iconsrc}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  margin: 24px 0;

  &::before {
    content: "";
    position: absolute;
    background-image: url("${(props) => props.bannersrc}");
    width: 100%;
    height: 70px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -1;
    transform: scale(1.5);
  }
`;
