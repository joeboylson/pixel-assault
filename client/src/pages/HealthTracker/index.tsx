import PageWrapper from "../../layouts/PageWrapper";
import Button from "../../components/Button";
import PageMaxWithContainer from "../../layouts/PageMaxWidthContainer";
import { HealthSlider } from "../../components/HealthSlider";
import { useCallback, useEffect, useState } from "react";
import { HealthSliderValue } from "../../types";
import { HealthSlidersWrapper, StyledHealthTracker } from "./StyledComponents";
import {
  createNewHealthSlider,
  getSavedHealthSliders,
  saveHealthSliders,
} from "../../utils/healthSlider";
import { useThemeContext } from "../../context/ThemeContext";

export function HealthTracker() {
  const { useDefaultTheme } = useThemeContext();
  useEffect(useDefaultTheme, [useDefaultTheme]);

  const [healthSliders, setHealthSliders] = useState<HealthSliderValue[]>();

  useEffect(() => {
    if (!healthSliders) {
      const savedHealthSliders = getSavedHealthSliders();
      setHealthSliders(savedHealthSliders);
      return;
    }

    saveHealthSliders(healthSliders);
  }, [healthSliders]);

  const addNewSlider = useCallback(() => {
    const _newHealthSlider = createNewHealthSlider();
    setHealthSliders((_healthSliders) => [
      ...(_healthSliders ?? []),
      _newHealthSlider,
    ]);
  }, []);

  const setHealthSliderValue = useCallback((id: string, value: number) => {
    setHealthSliders((_healthSliders) =>
      (_healthSliders ?? []).map((slider) => {
        if (slider.id === id) return { ...slider, value };
        return slider;
      })
    );
  }, []);

  return (
    <PageWrapper>
      <PageMaxWithContainer>
        <StyledHealthTracker>
          <h3>Health Tracker</h3>
          <p>
            (Chat GPT) Welcome to the Board Game Health Tracker—your ultimate
            companion for managing the health of game pieces during gameplay!
            This tool is designed to streamline your experience by providing an
            intuitive and interactive way to track the health status of
            characters, units, or other elements in your favorite board games.
            With customizable health bars, easy-to-use controls, and real-time
            updates, you'll never lose track of a character's health again.
            Perfect for RPGs, strategy games, or any tabletop adventure where
            keeping tabs on health points is critical. Features include:
            Customizable Trackers: Set names, max health values, and unique
            colors for each game piece. Interactive Interface: Increment or
            decrement health with simple clicks or keyboard shortcuts. Save and
            Load: Preserve health states between sessions for ongoing campaigns.
            Multi-Device Support: Seamlessly switch between desktop, tablet, and
            mobile while keeping your data intact. Start tracking and stay
            focused on the game—let us handle the stats!
          </p>
          <HealthSlidersWrapper data-id="HealthSlidersWrapper">
            {(healthSliders ?? []).map((_healthSlider) => {
              return (
                <HealthSlider
                  {..._healthSlider}
                  key={_healthSlider.id}
                  setHealthSliderValue={setHealthSliderValue}
                />
              );
            })}
          </HealthSlidersWrapper>
          <Button onClick={addNewSlider} text="Add New Healthbar" />
        </StyledHealthTracker>
      </PageMaxWithContainer>
    </PageWrapper>
  );
}
