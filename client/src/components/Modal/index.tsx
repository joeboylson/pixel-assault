import { MouseEvent } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Dialog, DialogueExitButton, DialogWrapper } from "./StyledComponents";
import { compact } from "lodash";
import { WithChildren } from "../../types";
import { X } from "@phosphor-icons/react";
import MinimalButton from "../MinimalButton";

type _props = WithChildren & {
  buttonChild?: React.ReactNode | React.ReactNode[];
  buttonComponent?: React.ReactNode;
  buttonDisabled?: boolean;
  handleOnClose?: () => void;
  headless?: boolean;
  fillHeight?: boolean;
};

export default function Modal({
  children,
  buttonChild,
  buttonComponent,
  buttonDisabled,
  handleOnClose,
  headless,
  fillHeight = true,
}: _props) {
  const {
    disable: closeDialog,
    enable: openDialog,
    value: isOpen,
  } = useToggle(headless);

  const close = () => {
    closeDialog();
    handleOnClose?.();
  };

  const ignoreClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const className = compact([
    isOpen && "is-open",
    fillHeight && "fill-height",
  ]).join(" ");

  return (
    <>
      {!headless && !buttonComponent && (
        <MinimalButton onClick={openDialog} disabled={buttonDisabled}>
          {buttonChild}
        </MinimalButton>
      )}

      {buttonComponent && buttonComponent}

      <DialogWrapper onClick={close} className={className}>
        <Dialog onClick={ignoreClick} className={className}>
          <DialogueExitButton onClick={close} data-id="DialogueExitButton">
            <X color="#FFFFFF" />
          </DialogueExitButton>
          <div>{children}</div>
        </Dialog>
      </DialogWrapper>
    </>
  );
}
