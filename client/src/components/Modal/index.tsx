import { MouseEvent } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Dialog, DialogueExitButton, DialogWrapper } from "./StyledComponents";
import { compact } from "lodash";
import { WithChildren } from "../../types";
import { X } from "@phosphor-icons/react";
import { iconProps } from "../../theme/icon";
import MinimalButton from "../MinimalButton";

type _props = WithChildren & {
  buttonChild?: React.ReactNode | React.ReactNode[];
  buttonDisabled?: boolean;
  handleOnClose?: () => void;
  headless?: boolean;
};

export default function Modal({
  children,
  buttonChild,
  buttonDisabled,
  handleOnClose,
  headless,
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

  const className = compact([isOpen && "is-open"]).join(" ");

  return (
    <>
      {!headless && (
        <MinimalButton onClick={openDialog} disabled={buttonDisabled}>
          {buttonChild}
        </MinimalButton>
      )}

      <DialogWrapper onClick={close} className={className}>
        <Dialog onClick={ignoreClick} className={className}>
          <DialogueExitButton onClick={close} data-id="DialogueExitButton">
            <X {...iconProps} color="#FFFFFF" />
          </DialogueExitButton>
          <div>{children}</div>
        </Dialog>
      </DialogWrapper>
    </>
  );
}
