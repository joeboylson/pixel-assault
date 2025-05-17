import PageWrapper from "../../layouts/PageWrapper";
import SpacedOneColumn from "../../components/SpacedOneColumn";
import OffsetTwoColumn from "../../components/OffsetTwoColumn";
import styled from "styled-components";
import { useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { HomeSection } from "../../layouts/HomeSection";

/**
 * Banner GIF
 */
import BannerGif from "../../assets/images/homepage/BannerArtAnimation.gif";

/**
 * Divisors
 */
import Divisors_Plains from "../../assets/images/homepage/Divisors_Plains.png";
import Divisors_Mercenaries from "../../assets/images/homepage/Divisors_Mercenaries.png";
import Divisors_Mountains from "../../assets/images/homepage/Divisors_Mountains.png";
import Divisors_Silicon from "../../assets/images/homepage/Divisors_Silicon.png";

/**
 * Section Images
 */

import Plains_Commander from "../../assets/images/homepage/Plains Commander.png";
import Mountains_Tank_Commander from "../../assets/images/homepage/Mountains Tank Commander.png";
import Silicon_Special_Soldiers from "../../assets/images/homepage/Silicon Special Soldiers.png";

const StyledBannerGif = styled.img`
  display: block;
`;

const SectionImage = styled.img`
  display: block;
  opacity: 0.75;

  @media (max-width: 800px) {
    max-width: 300px;
    margin: auto;
  }
`;

export function Home() {
  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  return (
    <PageWrapper nopadding>
      <StyledBannerGif src={BannerGif} alt="" />

      <div style={{ width: "100vw" }}>
        <HomeSection color="#040917" image={Divisors_Plains}>
          <SpacedOneColumn>
            <h3>INTRODUCTION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              quisquam! Ullam sint quos porro possimus voluptate voluptatibus
              quo earum beatae consectetur quam pariatur culpa veritatis,
              accusantium, reprehenderit, dolor atque. Corrupti, assumenda
              dignissimos.
            </p>
          </SpacedOneColumn>
        </HomeSection>

        {/* Green */}
        <HomeSection color="#1d3805" image={Divisors_Mercenaries}>
          <OffsetTwoColumn direction="left">
            <SectionImage src={Plains_Commander} alt="" />
            <SpacedOneColumn>
              <h3>FEATURE 01</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quisquam! Ullam sint quos porro possimus voluptate
                voluptatibus quo earum beatae consectetur quam pariatur culpa
                veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                assumenda dignissimos.#172b0a
              </p>
            </SpacedOneColumn>
          </OffsetTwoColumn>
        </HomeSection>

        {/* Brown */}
        <HomeSection color="#2d170a" image={Divisors_Mountains}>
          <OffsetTwoColumn direction="right">
            <SpacedOneColumn>
              <h3>FEATURE 02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quisquam! Ullam sint quos porro possimus voluptate
                voluptatibus quo earum beatae consectetur quam pariatur culpa
                veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                assumenda dignissimos.
              </p>
            </SpacedOneColumn>
            <span />
          </OffsetTwoColumn>
        </HomeSection>

        {/* Dark Blue */}
        <HomeSection color="#0b245c" image={Divisors_Silicon}>
          <OffsetTwoColumn direction="left">
            <SectionImage src={Mountains_Tank_Commander} />
            <SpacedOneColumn>
              <h3>FEATURE 03</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quisquam! Ullam sint quos porro possimus voluptate
                voluptatibus quo earum beatae consectetur quam pariatur culpa
                veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                assumenda dignissimos.
              </p>
            </SpacedOneColumn>
          </OffsetTwoColumn>
        </HomeSection>

        {/* Light Blue */}
        <HomeSection color="#3e6287">
          <OffsetTwoColumn direction="right">
            <SpacedOneColumn>
              <h3>FEATURE 04</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quisquam! Ullam sint quos porro possimus voluptate
                voluptatibus quo earum beatae consectetur quam pariatur culpa
                veritatis, accusantium, reprehenderit, dolor atque. Corrupti,
                assumenda dignissimos.
              </p>
            </SpacedOneColumn>
            <SectionImage src={Silicon_Special_Soldiers} />
          </OffsetTwoColumn>
        </HomeSection>
      </div>
    </PageWrapper>
  );
}
