import PageWrapper from "../../layouts/PageWrapper";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import Modal from "../../components/Modal";
import AddEditPlayer from "../../layouts/AddEditPlayer";
import Sum from "../../assets/images/icons/Sum.svg";
import { useEffect, useMemo, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { useToggle } from "../../hooks/useToggle";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import {
  getFactionBackground,
  getFactionBanner,
  getFactionIcon,
} from "../../utils/faction";

import {
  AddNewPlayerButton,
  PlayersGridWrapper,
  FactionBanner,
  HealthSlidersWrapper,
  NoTeamsWrapper,
  StyledHealthTracker,
  PlayerButton,
  PlayerName,
} from "./StyledComponents";
import { ControlIcon } from "../../components/HealthSlider/StyledComponents";
import { Coins, Heart } from "@phosphor-icons/react";
import HealthSlider from "../../components/HealthSlider";
import GoldSlider from "../../components/GoldSlider";

export function HealthTracker() {
  const {
    disable: closeAddNewPlayerModal,
    enable: openAddNewPlayerModal,
    value: addNewPlayerModalIsOpen,
  } = useToggle();

  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  const { players, isEmpty: noExistingTeams } = usePlayerTrackerContext();
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(
    noExistingTeams ? null : players[0].id
  );

  const selectedPlayer = players.find((p) => p.id === selectedPlayerId);

  const FactionBackgroundSrc = useMemo(() => {
    if (!selectedPlayer) return getFactionBackground("");
    const factionSlug = selectedPlayer.faction?.slug?.current ?? "";
    return getFactionBackground(factionSlug);
  }, [selectedPlayer]);

  const FactionIconSrc = useMemo(() => {
    if (!selectedPlayer) return null;
    const factionSlug = selectedPlayer.faction?.slug?.current ?? "";
    return getFactionIcon(factionSlug);
  }, [selectedPlayer]);

  const FactionBannerSrc = useMemo(() => {
    if (!selectedPlayer) return null;
    const factionSlug = selectedPlayer.faction?.slug?.current ?? "";
    return getFactionBanner(factionSlug);
  }, [selectedPlayer]);

  return (
    <PageWrapper>
      <PageMaxWithContainer>
        <StyledHealthTracker data-id="StyledHealthTracker">
          {/**
           *
           * ADD NEW PLAYER MODAL
           *
           */}
          {addNewPlayerModalIsOpen && (
            <Modal headless>
              <AddEditPlayer handleAfterSubmit={closeAddNewPlayerModal} />
            </Modal>
          )}

          {/**
           *
           * IF NO EXISTING TEAMS
           *
           */}
          {noExistingTeams && (
            <NoTeamsWrapper>
              <h3>Welcome to the Health Tracker page.</h3>
              <p>
                On this page, you can create each of the players in the game -
                giving them a name, a team, and a faction.
              </p>
              <p>Players can create a new team, or join an existing one.</p>
              <p>
                Each player can also choose a Faction, regardless of team
                association.
              </p>
              <AddNewPlayerButton
                onClick={openAddNewPlayerModal}
                className="large"
              >
                <ControlIcon src={Sum} />
                Add a New Player
              </AddNewPlayerButton>
            </NoTeamsWrapper>
          )}

          {/**
           *
           * SHOW BOARD
           *
           */}

          {!noExistingTeams && (
            <>
              <PlayersGridWrapper>
                <AddNewPlayerButton onClick={openAddNewPlayerModal}>
                  <ControlIcon src={Sum} />
                  Add a New Player
                </AddNewPlayerButton>
                {players.map((p) => {
                  const className = p.id === selectedPlayer?.id ? "active" : "";

                  return (
                    <PlayerButton
                      onClick={() => setSelectedPlayerId(p.id)}
                      className={className}
                    >
                      <p>{p.name}</p>
                      <div>
                        <Heart size={20} color="red" />
                        <p>{p?.healthAmount}</p>
                      </div>
                      <p>Team: {p.team}</p>
                      <div>
                        <Coins size={20} color="yellow" />
                        {p?.goldAmount}
                      </div>
                    </PlayerButton>
                  );
                })}
              </PlayersGridWrapper>

              {selectedPlayer && (
                <HealthSlidersWrapper
                  data-id="HealthSlidersWrapper"
                  backgroundsrc={FactionBackgroundSrc}
                >
                  {FactionIconSrc && FactionBannerSrc && (
                    <FactionBanner
                      iconsrc={FactionIconSrc}
                      bannersrc={FactionBannerSrc}
                    />
                  )}
                  <PlayerName>{selectedPlayer.name}</PlayerName>
                  <HealthSlider {...selectedPlayer} readonly={false} />
                  <hr />
                  <GoldSlider {...selectedPlayer} readonly={false} />
                </HealthSlidersWrapper>
              )}
            </>
          )}
        </StyledHealthTracker>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
