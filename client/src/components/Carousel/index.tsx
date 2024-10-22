import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { compact, first, last, range, take, takeRight } from "lodash";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { CarouselPositions } from "../../enums/carousel";
import { reorderArray } from "../../utils/array";
import { SetTimeout } from "../../types/timeout";
import { WithManyChildren } from "../../types";

import {
  carouselAutoTransitionDelay,
  carouselTransitionDuration,
  CarouselWrapper,
  ChildWrapper,
  NavigationButton,
  NavigationButtonsWrapper,
  StyledCarousel,
} from "./StyledComponents";
import { iconProps } from "../../theme/icon";

const { NEXT, PREVIOUS, NEUTRAL } = CarouselPositions;

/**
 * Carousel must have at least 2 children
 */
export default function Carousel({ children }: WithManyChildren) {
  // "count children" - shorthand
  const cc = useMemo(() => children.length, [children]);

  /**
   * If there are only 2 children (the minimum amount required), then disabled
   * the "previous" navigation since there will not be anything there.
   */

  const previousNavigationDisabled = useMemo(() => cc === 2, [cc]);

  const defaultCarouselOrder = useMemo(() => {
    const _range = range(1, cc + 1);
    if (previousNavigationDisabled) return _range;
    return [last(_range) ?? -1, ...take(_range, 4)];
  }, [cc, previousNavigationDisabled]);

  const [order, setOrder] = useState<number[]>(defaultCarouselOrder);
  const [position, setPosition] = useState<CarouselPositions>(NEUTRAL);

  /**
   * returns an array of integers representing the new order of items.
   * is fully responsive to how many children are present (there will always be
   * at least 2)
   */
  const getOrderReorder = useCallback(
    (_position: CarouselPositions) => {
      let _range = range(1, cc + 1);

      // shorthands
      const r_1 = _range.length - 1;
      const f = first(_range) ?? -1;
      const l = last(_range) ?? -1;

      if (previousNavigationDisabled) return _range.reverse();
      if (_position === NEXT) return [...takeRight(_range, r_1), f];
      if (_position === PREVIOUS) return [l, ...take(_range, r_1)];

      return _range;
    },
    [cc, previousNavigationDisabled]
  );

  /**
   * After the transition is done, the children are reordered and the transition
   * is reset. This way, the next/previous functions can "loop" forever.
   */
  const handlePostTransition = useCallback((orderReorder: number[]) => {
    setTimeout(() => {
      setPosition(NEUTRAL);
      setOrder((_order) => reorderArray(orderReorder, _order));
    }, carouselTransitionDuration + 100);
  }, []);

  /**
   * Next and previous functions
   */
  const next = useCallback(() => {
    setPosition(NEXT);
    handlePostTransition(getOrderReorder(NEXT));
  }, [handlePostTransition, getOrderReorder]);

  const prev = useCallback(() => {
    setPosition(PREVIOUS);
    handlePostTransition(getOrderReorder(PREVIOUS));
  }, [handlePostTransition, getOrderReorder]);

  /**
   * Auto-transition to the next every "carouselAutotransitionDelay" seconds
   */

  const timeoutRef = useRef<SetTimeout>();

  useEffect(() => {
    if (position !== NEUTRAL || timeoutRef.current === undefined) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(next, carouselAutoTransitionDelay);
      return;
    }
  }, [position, next]);

  /**
   * display values
   */

  const orderedChildren = useMemo(
    () => reorderArray(order, children),
    [children, order]
  );

  const className = useMemo(() => {
    return compact([
      position,
      previousNavigationDisabled && "previous-disabled",
    ]).join(" ");
  }, [position, previousNavigationDisabled]);

  const buttonsDisabled = position !== NEUTRAL;

  return (
    <StyledCarousel data-id="Carousel">
      <CarouselWrapper className={className}>
        {orderedChildren.map((child, index) => (
          <ChildWrapper key={index}>{child}</ChildWrapper>
        ))}
      </CarouselWrapper>
      <NavigationButtonsWrapper>
        {previousNavigationDisabled ? (
          <span />
        ) : (
          <NavigationButton onClick={prev} disabled={buttonsDisabled}>
            <CaretLeft {...iconProps} />
          </NavigationButton>
        )}
        <NavigationButton onClick={next} disabled={buttonsDisabled}>
          <CaretRight {...iconProps} />
        </NavigationButton>
      </NavigationButtonsWrapper>
    </StyledCarousel>
  );
}
