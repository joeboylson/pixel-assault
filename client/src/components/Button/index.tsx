import styled from "styled-components";

const BUTTON_HEIGHT = 32;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  outline: none;
  position: relative;
  height: ${BUTTON_HEIGHT}px;
  padding: 0 32px;

  transition-duration: 300ms;

  &:hover {
    color: var(--themeAccent1);
    svg {
      fill: var(--themeAccent1);
    }
  }

  svg {
    height: ${BUTTON_HEIGHT}px;
    fill: white;
    transition-duration: 300ms;
    position: absolute;
    top: 0;

    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      transform: scale(-1, 1);
      right: 0;
    }
  }
`;

interface _props {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: _props) {
  return (
    <StyledButton onClick={onClick}>
      <ButtonCap />
      {text}
      <ButtonCap />
    </StyledButton>
  );
}

const ButtonCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4 8">
    <rect width="1" height="2" x="0" y="3"></rect>
    <rect width="1" height="2" x="0" y="0"></rect>
    <rect width="1" height="2" x="0" y="6"></rect>
    <rect width="1" height="8" x="2" y="0"></rect>
    <rect width="2" height="1" x="2" y="0"></rect>
    <rect width="2" height="1" x="2" y="7"></rect>
  </svg>
);
