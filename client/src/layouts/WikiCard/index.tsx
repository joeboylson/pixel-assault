import { Navigate } from "react-router-dom";
import { Card, Faction, MilitaryUnitType } from "../../types/sanity.types";
import { WikiPageProps } from "../../types/wiki";
import { Pages } from "../../enums";
import WikiMilitaryUnitType from "../WikiMilitaryUnitType";
import WikiFaction from "../WikiFaction";
import SpacedOneColumn from "../../components/SpacedOneColumn";
import Block from "../../components/Block";
import Image from "../../components/Image";
import OffsetTwoColumn from "../../components/OffsetTwoColumn";
import HyperlinkedWrapper from "../../components/HyperlinkedWrapper";

export default function WikiCard({ document }: WikiPageProps) {
  const card = (document as Card) ?? null;

  if (!card) return <Navigate to={Pages.WIKI} />;

  // card info
  const { name, actionEconomy, cardId, cost, image, is_commander } = card;

  // relations
  const { relatedMilitatyUnitType, relatedFaction } = card;

  // block content
  const { behindTheScenes, lore } = card;

  const _relatedMilitatyUnitType =
    relatedMilitatyUnitType as unknown as MilitaryUnitType;

  const _relatedFaction = relatedFaction as unknown as Faction;

  return (
    <SpacedOneColumn>
      <OffsetTwoColumn direction="left">
        {image?.asset && <Image value={image.asset} />}

        <SpacedOneColumn>
          <h2>{name}</h2>
          <div>
            <p>Action Economy: {actionEconomy}</p>
            <p>Card ID: {cardId}</p>
            <p>Cost: {cost}</p>
            <p>Is Commander: {is_commander ? "Yes" : "No"}</p>
          </div>
        </SpacedOneColumn>
      </OffsetTwoColumn>

      <div>
        <h3>Lore:</h3>
        <Block content={lore} />
      </div>

      <div>
        <h3>Behind the scenes:</h3>
        <Block content={behindTheScenes} />
      </div>

      {_relatedMilitatyUnitType && (
        <HyperlinkedWrapper
          to={`${Pages.WIKI}/${_relatedMilitatyUnitType._type}/${_relatedMilitatyUnitType.slug?.current}`}
          linkLabel={`Go to ${_relatedMilitatyUnitType.name}`}
        >
          <WikiMilitaryUnitType document={_relatedMilitatyUnitType} />
        </HyperlinkedWrapper>
      )}

      {_relatedFaction && (
        <HyperlinkedWrapper
          to={`${Pages.WIKI}/${_relatedFaction._type}/${_relatedFaction.slug?.current}`}
          linkLabel={`Go to ${_relatedFaction.name}`}
        >
          <WikiFaction document={_relatedFaction} />
        </HyperlinkedWrapper>
      )}
    </SpacedOneColumn>
  );
}
