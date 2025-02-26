import { Player } from "../../types";
import Minus from "../../assets/images/icons/Minus.svg";
import Sum from "../../assets/images/icons/Sum.svg";
import Coin from "../../assets/images/icons/Coin.svg";

import {
  CoinsWrapper,
  ControlIcon,
  SliderControl,
  StyledGoldSlider,
  TotalGoldWrapper,
} from "./StyledComponents";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import { range } from "lodash";

type _props = Player & {
  setHealthSliderValue?: (id: string, value: number) => void;
  readonly: boolean;
};

export default function GoldSlider({
  id,
  goldAmount,
  healthAmount: _,
  readonly,
  name: __,
}: _props) {
  const className = readonly ? "readonly" : "";

  const { incrementPlayerGold, decrementPlayerGold } =
    usePlayerTrackerContext();

  return (
    <StyledGoldSlider key={`goldslider-${id}`} className={className}>
      <TotalGoldWrapper>
        <img src={Coin} alt="" />
        <p>{goldAmount}</p>
      </TotalGoldWrapper>

      {!readonly && (
        <SliderControl onClick={() => decrementPlayerGold(id)}>
          <ControlIcon src={Minus} />
        </SliderControl>
      )}

      <CoinsWrapper>
        {range(0, goldAmount).map((i) => {
          return <img key={`player-${id}-${i}`} src={Coin} alt="" />;
        })}
      </CoinsWrapper>

      {!readonly && (
        <SliderControl onClick={() => incrementPlayerGold(id)}>
          <ControlIcon src={Sum} />
        </SliderControl>
      )}
    </StyledGoldSlider>
  );
}
