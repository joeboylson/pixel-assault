import styled from "styled-components";
import { MinimalButtonCSS } from "../../components/MinimalButton";

export const StyledHealthTracker = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 48px;
  min-height: 50vh;
`;

export const NoTeamsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;

export const AddNewPlayerButton = styled.button`
  ${MinimalButtonCSS}

  width: 100%;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
  border: 1px solid white;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;

  &.large {
    padding: 48px 12px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  img {
    padding-right: 24px;
    padding-top: 4px;
  }
`;

export const PlayerButton = styled.button`
  ${MinimalButtonCSS}

  width: 100%;
  display: grid;
  grid-template-columns: 1fr 48px;
  border: 1px solid white;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 12px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.25);
  }

  img {
    padding-right: 24px;
    padding-top: 4px;
  }

  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  * {
    text-align: left;
  }
`;

export const PlayersGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  gap: 8px;
  align-items: center;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const HealthSlidersWrapper = styled.div<{ backgroundsrc: string }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  width: calc(100% - 48px);
  max-width: calc(500px - 48px);
  margin: auto;
  padding: 24px;
  z-index: 0;
  border: 1px solid white;
  border-radius: 8px;

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

export const PlayerName = styled.h3`
  padding-left: 12px;
`;
