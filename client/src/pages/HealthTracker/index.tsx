import PageWrapper from "../../layouts/PageWrapper";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import { HealthSlider } from "../../components/HealthSlider";
import { useEffect } from "react";
import { HealthSlidersWrapper, StyledHealthTracker } from "./StyledComponents";
import { useThemeContext } from "../../context/ThemeContext";
import Modal from "../../components/Modal";
import AddEditPlayer from "../../layouts/AddEditPlayer";
import { useToggle } from "../../hooks/useToggle";
import MinimalButton from "../../components/MinimalButton";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";

export function HealthTracker() {
  const {
    disable: closeAddNewPlayerModal,
    enable: openAddNewPlayerModal,
    value: addNewPlayerModalIsOpen,
  } = useToggle();

  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  const { players } = usePlayerTrackerContext();

  return (
    <PageWrapper hideHeaderAndFooter>
      <PageMaxWithContainer>
        <StyledHealthTracker>
          <div>
            <p>controls:</p>
            {addNewPlayerModalIsOpen && (
              <Modal headless>
                <AddEditPlayer handleAfterSubmit={closeAddNewPlayerModal} />
              </Modal>
            )}
            <MinimalButton onClick={openAddNewPlayerModal}>
              Add New Player
            </MinimalButton>
          </div>

          <HealthSlidersWrapper data-id="HealthSlidersWrapper">
            {players.map((player) => {
              return <HealthSlider {...player} key={player.id} />;
            })}
          </HealthSlidersWrapper>
        </StyledHealthTracker>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
