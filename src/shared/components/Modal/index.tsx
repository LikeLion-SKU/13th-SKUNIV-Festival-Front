import { ReactNode, useEffect } from "react";
import { Actions, Backdrop, Wrapper } from "./style";
import Action, { ActionProps } from "./Action";

interface ModalProps {
  children: ReactNode;
  actions?: ActionProps["actionData"][];
  onClose: () => void;
  padding?: string;
  backdropClose?: boolean;
}

const Modal = ({ children, actions, onClose, padding, backdropClose = true }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Backdrop
      onClick={backdropClose ? onClose : () => {}} // TODO stop propagation
      initial={{
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      }}
      animate={{ opacity: 1 }}
      exit={{
        // TODO not animated
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Wrapper onClick={(e) => e.stopPropagation()} padding={padding}>
        {children}
        {actions && actions?.length > 0 && (
          <Actions>
            {actions.map((action) => (
              <Action key={action.title} actionData={action} />
            ))}
          </Actions>
        )}
      </Wrapper>
    </Backdrop>
  );
};

export default Modal;
