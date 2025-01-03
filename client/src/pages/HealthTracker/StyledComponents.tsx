import styled from "styled-components";
import MountainTribesHQ from "../../assets/images/Mountain Tribes - HQ.png";

export const StyledHealthTracker = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  padding: 0 24px;
`;

export const HealthSlidersWrapper = styled.div`
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

    background-image: url("${MountainTribesHQ}");
    background-size: cover;
    background-position: center;

    opacity: 0.2;
    border-radius: 8px;
  }
`;
