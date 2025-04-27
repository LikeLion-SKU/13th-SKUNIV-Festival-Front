import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Actions, Backdrop, Wrapper } from "./style";
import useReservationStore from "../../stores/useReservationStore";
import Action, { ActionProps } from "./Action";

interface ModalProps {
  children: ReactNode;
  actions?: ActionProps["actionData"][];
  padding?: string;
}

const Modal = ({ children, actions, padding }: ModalProps) => {
  const { onClose } = useReservationStore();

  return createPortal(
    <Backdrop onClick={onClose}>
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
    </Backdrop>,
    document.body
  );
};

export default Modal;
