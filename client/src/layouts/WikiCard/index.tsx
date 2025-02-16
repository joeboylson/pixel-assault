import { Link, Navigate } from "react-router-dom";
import {
  Attribution,
  Card,
  Faction,
  MilitaryUnitType,
} from "../../types/sanity.types";
import { WikiPageProps } from "../../types/wiki";
import { Pages } from "../../enums";
import SpacedOneColumn from "../../components/SpacedOneColumn";
import Block from "../../components/Block";
import Image from "../../components/Image";
import OffsetTwoColumn from "../../components/OffsetTwoColumn";
import styled from "styled-components";
import Details from "../../components/Details";
import { ImageValue } from "../../types/image";

const CardWrapper = styled.div`
  box-shadow: black 15px 25px 35px -15px;
  border-radius: 8px;
  overflow: hidden;
  height: fit-content;
  max-width: 300px;
  margin: 0 auto;

  img {
    display: block;
  }
`;

export default function WikiCard({ document }: WikiPageProps) {
  const card = (document as Card) ?? null;

  if (!card) return <Navigate to={Pages.WIKI} />;

  const { name, actionEconomy, cardId, cost, image } = card;
  const { relatedMilitatyUnitType, relatedFaction } = card;
  const { behindTheScenes, lore } = card;

  const _relatedMilitatyUnitType =
    relatedMilitatyUnitType as unknown as MilitaryUnitType;

  const _relatedFaction = relatedFaction as unknown as Faction;

  const value = image as ImageValue;

  return (
    <SpacedOneColumn>
      <OffsetTwoColumn direction="left">
        <CardWrapper>{image?.asset && <Image value={value} />}</CardWrapper>

        <SpacedOneColumn>
          <h2>{name}</h2>
          <Details
            details={[
              ["Card ID:", cardId],
              ["Action Economy:", actionEconomy],
              ["Cost:", cost],
              [
                "Faction:",
                _relatedFaction ? (
                  <Link
                    to={`${Pages.WIKI}/${_relatedFaction._type}/${_relatedFaction.slug?.current}`}
                  >
                    {_relatedFaction.name}
                  </Link>
                ) : (
                  "No Faction"
                ),
              ],
              [
                "Military Unit:",
                _relatedMilitatyUnitType ? (
                  <Link
                    to={`${Pages.WIKI}/${_relatedMilitatyUnitType._type}/${_relatedMilitatyUnitType.slug?.current}`}
                  >
                    {_relatedMilitatyUnitType.name}
                  </Link>
                ) : (
                  "No Faction"
                ),
              ],
            ]}
          />
        </SpacedOneColumn>
      </OffsetTwoColumn>

      <SpacedOneColumn>
        <h3>Lore:</h3>
        <Block content={lore} />
      </SpacedOneColumn>

      <SpacedOneColumn>
        <h3>Behind the scenes:</h3>
        <Block content={behindTheScenes} />
      </SpacedOneColumn>

      {/* {_relatedMilitatyUnitType && (
        <HyperlinkedWrapper
          
          linkLabel={`Go to ${_relatedMilitatyUnitType.name}`}
        >
          <WikiMilitaryUnitType document={_relatedMilitatyUnitType} />
        </HyperlinkedWrapper>
      )}

      {_relatedFaction && (
        <HyperlinkedWrapper linkLabel={`Go to ${_relatedFaction.name}`}>
          <WikiFaction document={_relatedFaction} />
        </HyperlinkedWrapper>
      )} */}
    </SpacedOneColumn>
  );
}
