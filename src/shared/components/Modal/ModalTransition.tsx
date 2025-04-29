import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalTransitionProps {
  children: ReactNode;
}

const ModalTransition = ({ children }: ModalTransitionProps) => {
  return createPortal(<AnimatePresence mode="wait">{children}</AnimatePresence>, document.body);
};

export default ModalTransition;
