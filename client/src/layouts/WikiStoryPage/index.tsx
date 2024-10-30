import SpacedOneColumn from "../../components/SpacedOneColumn";
import { StoryPage } from "../../types/sanity.types";
import { WikiPageProps } from "../../types/wiki";
import Block from "../../components/Block";

export default function WikiStoryPage({ document }: WikiPageProps) {
  const storyPage = (document as StoryPage) ?? null;

  const { title, content } = storyPage;

  return (
    <SpacedOneColumn>
      <h2>{title}</h2>
      <Block content={content} />
    </SpacedOneColumn>
  );
}
