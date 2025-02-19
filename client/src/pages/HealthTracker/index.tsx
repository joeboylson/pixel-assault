import PageWrapper from "../../layouts/PageWrapper";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import Modal from "../../components/Modal";
import AddEditPlayer from "../../layouts/AddEditPlayer";
import MinimalButton from "../../components/MinimalButton";
import Dropdown from "../../components/Dropdown";
import Sum from "../../assets/images/icons/Sum.svg";
import { HealthSlider } from "../../components/HealthSlider";
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
  ControlsWrapper,
  FactionBanner,
  HealthSlidersWrapper,
  StyledHealthTracker,
} from "./StyledComponents";
import { ControlIcon } from "../../components/HealthSlider/StyledComponents";

export function HealthTracker() {
  const {
    disable: closeAddNewPlayerModal,
    enable: openAddNewPlayerModal,
    value: addNewPlayerModalIsOpen,
  } = useToggle();

  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  const [selectedTeam, setSelectedTeam] = useState<string>();
  const [selectedPlayerName, setSelectedPlayerName] = useState<string>();

  const handleChangeTeam = (_selectedTeam: string) => {
    setSelectedTeam(_selectedTeam);
    setSelectedPlayerName("");
  };

  const {
    players,
    teams,
    isEmpty: noExistingTeams,
  } = usePlayerTrackerContext();

  const playersOnTeam = players.filter((p) => p.team === selectedTeam) ?? [];
  const teamPlayerNames = playersOnTeam.map((p) => p.name);

  const selectedPlayer = players.find((p) => p.name === selectedPlayerName);

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
        <StyledHealthTracker>
          <ControlsWrapper>
            {addNewPlayerModalIsOpen && (
              <Modal headless>
                <AddEditPlayer handleAfterSubmit={closeAddNewPlayerModal} />
              </Modal>
            )}
            <MinimalButton onClick={openAddNewPlayerModal}>
              <ControlIcon src={Sum} />
            </MinimalButton>
            <Dropdown
              options={teams}
              onChange={handleChangeTeam}
              selectedOption={selectedTeam}
              key={`teamselect-${selectedTeam}`}
              disabled={noExistingTeams}
            />
            <Dropdown
              options={teamPlayerNames}
              onChange={setSelectedPlayerName}
              selectedOption={selectedPlayerName}
              key={`playerselect-${selectedTeam}`}
              disabled={noExistingTeams}
            />
          </ControlsWrapper>

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

            {players.map((player) => {
              const readonly = player.id !== selectedPlayer?.id;

              return (
                <HealthSlider {...player} key={player.id} readonly={readonly} />
              );
            })}
          </HealthSlidersWrapper>
        </StyledHealthTracker>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
