import { Minus, Plus, Skull } from "@phosphor-icons/react";
import { Player } from "../../types";
import {
  ProgressBar,
  ProgressBarValue,
  SliderControl,
  StyledHealthSlider,
} from "./StyledComponents";

type _props = Player & {
  setHealthSliderValue?: (id: string, value: number) => void;
};

export function HealthSlider({ id, goldAmount, healthAmount }: _props) {
  return (
    <StyledHealthSlider key={id}>
      <SliderControl onClick={console.log}>
        {healthAmount > 0 ? (
          <Minus size={24} weight="bold" />
        ) : (
          <Skull size={24} weight="bold" />
        )}
      </SliderControl>
      <ProgressBar percentage={healthAmount}>
        <ProgressBarValue>
          <p>{`${healthAmount} / 100`}</p>
        </ProgressBarValue>
      </ProgressBar>
      <SliderControl onClick={console.log}>
        <Plus size={24} weight="bold" />
      </SliderControl>
    </StyledHealthSlider>
  );
}
