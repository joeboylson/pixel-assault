import { Player } from "../../types";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import Minus from "../../assets/images/icons/Minus.svg";
import Sum from "../../assets/images/icons/Sum.svg";
import Skull from "../../assets/images/icons/Skull.svg";
import {
  ControlIcon,
  ProgressBar,
  ProgressBarValue,
  SliderControl,
  StyledHealthSlider,
} from "./StyledComponents";

type _props = Player & {
  setHealthSliderValue?: (id: string, value: number) => void;
  readonly: boolean;
};

export default function HealthSlider({
  id,
  goldAmount: _,
  healthAmount,
  readonly,
  name: __,
}: _props) {
  const className = readonly ? "readonly" : "";

  const { incrementPlayerHealth, decrementPlayerHealth } =
    usePlayerTrackerContext();

  return (
    <StyledHealthSlider key={`healthslider-${id}`} className={className}>
      {!readonly && (
        <SliderControl onClick={() => decrementPlayerHealth(id)}>
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
        <SliderControl onClick={() => incrementPlayerHealth(id)}>
          <ControlIcon src={Sum} />
        </SliderControl>
      )}
    </StyledHealthSlider>
  );
}
