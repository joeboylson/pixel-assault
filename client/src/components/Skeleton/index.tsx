import {
  StyledSkeletonBlock,
  StyledSkeletonTextLine,
} from "./StyledComponents";

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
