import styled from "styled-components";
import usePageScroll from "../../hooks/usePageScroll";
import Crow from "../../assets/images/Crow.png";

const StyledLilCrowGuy = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  padding: 0 0 120px 120px;
  pointer-events: none;

  &.attack {
    img {
      transition-delay: 500ms;
      transform: translate(-50px, 20px) rotate(-10deg);
      transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.27);
      transition-duration: 500ms;
    }
  }

  &:hover,
  &.retreat {
    img {
      transition-delay: 0ms;
      transform: translate(150px, -50px) rotate(0deg);
      transition-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
      transition-duration: 200ms;
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default function LilCrowGuy() {
  const scrollValue = usePageScroll();

  const className = scrollValue < 200 ? "retreat" : "attack";

  return (
    <StyledLilCrowGuy className={className}>
      <img src={Crow} alt="Lil Crow Guy"></img>
    </StyledLilCrowGuy>
  );
}
