import { MouseEvent } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Dialog, DialogWrapper } from "./StyledComponents";
import { compact } from "lodash";
import { WithChildren } from "../../types";

type _props = WithChildren & {
  buttonText?: string;
  buttonDisabled?: boolean;
  handleOnClose?: () => void;
  headless?: boolean;
};

export default function Modal({
  children,
  buttonText,
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
        <button onClick={openDialog} disabled={buttonDisabled}>
          {buttonText}
        </button>
      )}

      <DialogWrapper onClick={close} className={className}>
        <Dialog onClick={ignoreClick} className={className}>
          {children}
        </Dialog>
      </DialogWrapper>
    </>
  );
}
