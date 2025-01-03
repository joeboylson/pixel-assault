import { Minus, Plus, Skull } from "@phosphor-icons/react";
import { HealthSliderValue } from "../../types";
import {
  ProgressBar,
  ProgressBarValue,
  SliderControl,
  StyledHealthSlider,
} from "./StyledComponents";

type _props = HealthSliderValue & {
  setHealthSliderValue: (id: string, value: number) => void;
};

export function HealthSlider({
  id,
  min,
  max,
  value,
  setHealthSliderValue,
}: _props) {
  const percentage = (value / max) * 100;

  const decrement = () => {
    if (value === min) return;
    setHealthSliderValue(id, value - 1);
  };

  const increment = () => {
    if (value === max) return;
    setHealthSliderValue(id, value + 1);
  };

  return (
    <StyledHealthSlider key={id}>
      <SliderControl onClick={decrement}>
        {value > 0 ? (
          <Minus size={24} weight="bold" />
        ) : (
          <Skull size={24} weight="bold" />
        )}
      </SliderControl>
      <ProgressBar percentage={percentage}>
        <ProgressBarValue>
          <p>{`${value} / ${max}`}</p>
        </ProgressBarValue>
      </ProgressBar>
      <SliderControl onClick={increment}>
        <Plus size={24} weight="bold" />
      </SliderControl>
    </StyledHealthSlider>
  );
}
