import styled, { css } from "styled-components";

export const GradientTransitionCSS = css`
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.4)
  );

  background-size: 800% 800%;
  animation: gradientAnimation 1s ease infinite;
  border-radius: 4px;
  width: fit-content;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const StyledSkeletonTextLine = styled.p`
  ${GradientTransitionCSS}
  font-family: monospace;
  color: transparent;
`;

export const StyledSkeletonBlock = styled.div<{
  width: string;
  height: string;
}>`
  ${GradientTransitionCSS}
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface SkeletonTextLineProps {
  length?: number;
}

export function SkeletonTextLine({ length }: SkeletonTextLineProps) {
  return (
    <StyledSkeletonTextLine>{".".repeat(length ?? 24)}</StyledSkeletonTextLine>
  );
}

interface SkeletonBlockProps {
  width: string;
  height: string;
}

export function SkeletonBlock(props: SkeletonBlockProps) {
  return <StyledSkeletonBlock {...props} />;
}
