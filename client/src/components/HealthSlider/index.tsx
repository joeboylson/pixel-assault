import { Player } from "../../types";

import Minus from "../../assets/images/icons/Minus.svg";
import Sum from "../../assets/images/icons/Sum.svg";
import Skull from "../../assets/images/icons/Skull.svg";
import Coin from "../../assets/images/icons/Coin.svg";

import {
  ControlIcon,
  PlayerName,
  ProgressBar,
  ProgressBarValue,
  SliderControl,
  StyledHealthSlider,
} from "./StyledComponents";

type _props = Player & {
  setHealthSliderValue?: (id: string, value: number) => void;
  readonly: boolean;
};

export function HealthSlider({
  id,
  goldAmount,
  healthAmount,
  readonly,
  name,
}: _props) {
  const className = readonly ? "readonly" : "";

  return (
    <StyledHealthSlider key={id} className={className}>
      <PlayerName>{name}</PlayerName>

      {!readonly && (
        <SliderControl onClick={console.log}>
          {healthAmount > 0 ? (
            <ControlIcon src={Minus} />
          ) : (
            <ControlIcon src={Skull} />
          )}
        </SliderControl>
      )}

      <ProgressBar percentage={healthAmount} className={className}>
        <ProgressBarValue>
          <p>{`${healthAmount} / 100`}</p>
        </ProgressBarValue>
      </ProgressBar>

      {!readonly && (
        <SliderControl onClick={console.log}>
          <ControlIcon src={Sum} />
        </SliderControl>
      )}
    </StyledHealthSlider>
  );
}
