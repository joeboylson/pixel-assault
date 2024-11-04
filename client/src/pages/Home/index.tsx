import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useThemeContext } from "../../context/ThemeContext";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import PageWrapper from "../../layouts/PageWrapper";
import SpacedOneColumn from "../../components/SpacedOneColumn";
import OffsetTwoColumn from "../../components/OffsetTwoColumn";
import styled from "styled-components";

const HomeContentWrapper = styled.div`
  padding-top: 50px;
`;

export function Home() {
  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  return (
    <PageWrapper>
      <Carousel>
        <img src="images/001.jpg" alt="" />
        <img src="images/002.jpg" alt="" />
        <img src="images/003.jpg" alt="" />
        <img src="images/004.webp" alt="" />
      </Carousel>

      <HomeContentWrapper>
        <PageMaxWithContainer>
          <SpacedOneColumn extraSpacing>
            {/*  */}
            <OffsetTwoColumn direction="left">
              <img src="https://placehold.co/500" alt="" />
              <SpacedOneColumn>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, quisquam! Ullam sint quos porro possimus voluptate
                  voluptatibus quo earum beatae consectetur quam pariatur culpa
                  veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                  assumenda dignissimos.
                </p>
              </SpacedOneColumn>
            </OffsetTwoColumn>

            {/*  */}
            <OffsetTwoColumn direction="right">
              <SpacedOneColumn>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, quisquam! Ullam sint quos porro possimus voluptate
                  voluptatibus quo earum beatae consectetur quam pariatur culpa
                  veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                  assumenda dignissimos.
                </p>
              </SpacedOneColumn>
              <img src="https://placehold.co/500" alt="" />
            </OffsetTwoColumn>

            {/*  */}
            <OffsetTwoColumn direction="left">
              <img src="https://placehold.co/500" alt="" />
              <SpacedOneColumn>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, quisquam! Ullam sint quos porro possimus voluptate
                  voluptatibus quo earum beatae consectetur quam pariatur culpa
                  veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                  assumenda dignissimos.
                </p>
              </SpacedOneColumn>
            </OffsetTwoColumn>
          </SpacedOneColumn>
        </PageMaxWithContainer>
      </HomeContentWrapper>
    </PageWrapper>
  );
}
