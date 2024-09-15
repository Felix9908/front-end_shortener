import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [backdrop, setBackdrop] = useState("opaque");

  const onOpen = (backdropType = "opaque") => {
    setBackdrop(backdropType);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        backdrop,
        onOpen,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContext;
